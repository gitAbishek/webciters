# Welcome to this super fucking awesome codebase

Main tech we are using:

- [Remix](https://remix.run/docs)
- [Emotion styled](https://emotion.sh/docs/styled)
- [Zod](https://github.com/colinhacks/zod)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

# Style guide

## Structuring code

### Only use named exports:

This makes refactoring easier and forces you to be consistent, Always name the named export the same as the folder. this
rule is not valid for /page components since remix uses those as entry points.

### Style

use a styled.tsx for each component in the components' folder. This way we separate style from logic and have a more
declarative component tree.

## Assets

### Icon library

Always convert the svg with [svgomg](https://jakearchibald.github.io/svgomg/) on default settings. Change the color to
the property 'currentColor' and remove all paths and groups you do not need. Most of the time 1 path is enough. See
current icons for reference.

## Typescript

### Never use "any" type!

We strive for 100% no runtime errors, this means that any peace of data should be fully typed.

## Design system

Check chakra-ui.com for a thought out design system. While ours will be more suitable for our purpose a lot of ideas
came from chakra.

# Quirks

API design has some limitations in novulo atm, because of this our zod transforms need to do bit more work.

- Some API's properties can only return arrays with 1 object when there is always 1 object to be returned
- Some API's properties can not return empty arrays when no objects have been found. Instead of an empty array we get an empty object.

# Debug production issues

Simple way of running an environment that is very close to production is using docker.
After installing docker you can run these commands:

- `$ docker build . -t frontend-test`
- `$ docker run -p "3000:3000" --env-file ".env" frontend-test`

# Architecture

This app is a server side rendered react application. When a user requests a webpage the first render will be completely
servers side and gets hydrated after with react "reactivity". See the remix.run docs for more info about this concept.

## Layers:

### Root.tsx

Entry point of our app, this is also referred to as the root layout.

### Routes

In the routes folder lives all http configuration. This can be requesting a page or an ajax request. Since our project
is a web server and only response to http calls this will always be the starting point of any call
[All route file names are a 1 to 1 mapping with the endpoint url](https://remix.run/docs/en/v1/guides/routing).

### Loaders

Loaders are a way of retrieving data. Since components will generally be rendered server side you can only load data at
a page or a (root) layout.

Use the root layout when (almost) all pages do need this data. think the shopping cart or the wishlist.

If your pages are grouped under one path like (checkout/page1, checkout/page2). You can load data in a layout and put it
in to <Outlet/> context. (see CheckoutLayout how this is done)

Otherwise, it makes most sense to load the data in the specific route.

### Actions

Actions are a way of submitting data, In our new setup we only mutate data in Containers You can register an endpoint at
routes/data. and specify in this route which action should be used. An action always returns a MessageSchema, this
structure tells our frontend if it succeeded And communicate back a success or error message.

### Pages

The main entry of a whole page

### Containers

Component or/and Hook that submits data, these only talk to routes/data actions since containers are not specific to a
single page and can be used on multiple pages.

### Components

Pure functional components, these components can have state and effects. They will always render predictable based on
the props passed in.

### Api

All communication with Novulo is being done here

### Schema

We use [zod](https://github.com/colinhacks/zod) for data parsing / validating. Here are all schemas defined that are
used by components, pages and the API. We try to keep the schema as close as possible as novulo api. Schema creation
will like first be done in the api and when you notice other components need this schema too you can move it to the
schema folder.

## Examples of use cases and through which layers code will be executed.

![](docs/contact-info-retrieve.png)
![](docs/contact-info-mutate.png)

## Tutorials

### Make a page that gets the contact info and is able to mutate this data

First we need a page that displays a form that displays all current data.

#### 1. Make a page that is callable by http(s)

Start of by making a route that the user will request when it wants to visit the page.

Create a new empty file in: routes/account/voorkeuren that is called: contact-info.ts.

And create a new file in: pages/Account/Preferences/LoginInfo that is called index.tsx with a stateless component:

```tsx
export function AccountContactInfo() {
  return <Text>Hello world</Text>;
}
```

the route will be the url path that the user can go to in his browser, whereas the page is the actual rendered jsx.

In routes/account/voorkeuren/contact-info.ts import the page like so:

```ts
import { AccountContactInfo } from "~/pages/Account/Preferences/ContactInfo";
```

And export this page as default:

```ts
export default AccountContactInfo;
```

You should now be able to go to the path of the route and see hello world:
`localhost:3000/account/voorkeuren/contact-info`

_tip: If you don't see your page try restarting your server._

#### 2. Create an api call that is able to retrieve our current contact-info.

After we checked the novulo backend documentation we can see that to get the contact-info we need to execute the
following call:

```ts
const url = "{path}/user/contact_info";

type ResponseBody = [
  {
    first_name: string;
    prefix_surname: string | null;
    surname: string;
    telephone: string | null;
    email: string;
    gender: string | null;
  }
];
```

To translate this information into a query call we start of by making a file in the api folder that corresponds with the
path. In this case this will be: `api/user/contactInfo.ts`

Firstly we need to specify the response body in zod. We use zod to parse and transform runtime data. By using zod we can
be sure that the data the app expects is really the data we get back.

See the zod documentation about how this works in practise but in this case our zod schema would look like this:

```ts
const getContactInfoResponseSchema = z.array(
  z.object({
    first_name: z.string(),
    prefix_surname: z.string().nullable(),
    surname: z.string(),
    telephone: z.string().nullable(),
    email: z.string(),
    gender: z.enum(["Male", "Female"]).nullable(),
  })
);
```

Next we use the createQuery function to put it all together:

```ts
export const getContactInfo = createQuery({
  path: "/user/contact_info",
  withAuthToken: true, // Since its a authenticated call we pass true here
  responseShape: getContactInfoResponseSchema,
});
```

#### 3. Create a loader that executes the api call and gives it to the "frontend"

in routes/account/contact-info we create the following loader:

```ts
export const loader = async ({ request }: DataFunctionArgs) => {
  const session = await getSession(request); // will retrieve the session

  try {
    // In the happy case this will be the data returned by the loader
    return {
      contactInfo: await getContactInfo(session, {}), // needs the session to get the auth token
    };
  } catch (e) {
    // Here you can handle any unexpected errors, like unauthenticated
    await clearTokenAndRedirectWhenUnauthenticated(e, request);
    throw e;
  }
};

// We also infer the type of the result of the loader, we can use this type in our page.
export type AccountContactInfoPageData = Awaited<ReturnType<typeof loader>>;
```

#### 4. Consume the result of the loader

In your page you can consume the loader:

```tsx
export function AccountContactInfo() {
  const { contactInfo } = useLoaderData<AccountContactInfoPageData>();

  return <Text>{JSON.stringify(contactInfo)}</Text>;
}
```

When you go to your page you should now be able to see the contactInfo data.

#### 5. Create a mutation api call for our container

Now that we can retrieve the data with our getContactInfo function we also need a way of doing mutation calls.

Firstly ill refactor the responseSchema for `api/user/contactInfo.ts` to our schema folder.
this will make it more straightforward to use in the rest of our app.

in `schemas/contactInfo.ts` we have now the following code:

```ts
import { z } from "zod";

export const contactInfo = z.object({
  first_name: z.string(),
  prefix_surname: z.string().nullable(),
  surname: z.string(),
  telephone: z.string().nullable(),
  email: z.string(),
  gender: z.enum(["Male", "Female"]).nullable(),
});

export type ContactInfo = z.infer<typeof contactInfo>;
```

ill refer this schema in `api/user/contactInfo.ts` while also transforming the response since we know that the
backend will always return an array with 1 object in it. This makes the data more friendly to work with in the rest of our app.

```ts
import { contactInfo } from "~/schema/contactInfo";
import { firstItem } from "~/schema/helpers";

const getContactInfoResponseSchema = z.array(contactInfo).transform(firstItem);

export const getContactInfo = createQuery({
  path: "/user/contact_info",
  withAuthToken: true,
  responseShape: getContactInfoResponseSchema,
});
```

We can reuse this contactInfo schema for our mutation call as well, According to the documentation we cannot change the email.
I can use zod functions to change the schema to fit our mutation call better. This wil result in the following code:

```ts
import { result } from "~/schema/helpers";
import { contactInfo } from "~/schema/contactInfo";

const putContactInfoBody = contactInfo.omit({ email: true });

export const putContactInfo = createMutation({
  path: "/user/contact_info/edit",
  withAuthToken: true,
  bodyParser: putContactInfoBody,
  responseParser: result,
  method: "put",
});
```

#### 6. Create a container that will be able to submit formData

Create the following files in the `/containers/ContactInfoForm` folder.

- **schema.ts** This is the schema of the formData that the form will send to the server, this schema is also used for
  client side validation
- **server.ts** Here comes the action that the backend will use to process the submitted form.
- **index.tsx** (JSX of our form)

##### schema.ts:

in schema.ts we define the formData the form will produce. We always try to make the formData as close as the
representation of the backend, so we don't need to map any keys.

Since formData has no concept of nullable, numeric or boolean values we need to use zod processors To deal with this
behavior:

- Wrap all text fields with a text() helper
- Wrap all numeric fields with a numeric() helper
- Use the checkbox() helper for checkboxes.

In this case the following schema will be created

```ts
export const formInputSchema = formData({
  first_name: text(z.string()),
  prefix_surname: text(z.string().nullable()),
  surname: text(z.string()),
  telephone: text(z.string().nullable()),
  gender: z.enum(["Male", "Female"]).nullable(),
});
```

##### server.ts

This is where the form request will be handled, send to Novulo and communicate back the result.

An action in this case will look like this:

```ts
export const action: ActionFunction = async ({
  request,
}): Promise<MessageSchema> => {
  const session = await getSession(request); // retrieve the session
  const formData = await request.formData(); // retrieve the formData
  const formValues = formInputSchema.parse(formData); // parse the formData with the defined schema

  try {
    const result = await putContactInfo(session, formValues, {}); // call to novulo

    if (!result.success) return result;

    return {
      success: "Je persoonlijke gegevens zijn bijgewerkt.",
    };
  } catch (e) {
    await clearTokenAndRedirectWhenUnauthenticated(e, request);
    throw e;
  }
};
```

Its good practise to have MessageSchema as a return type, by returning a consistent message in actions
we have can have consistent ways of returning feedback to the user

We also need to tell the server for which http call this action will be run, we do that in the following way.
create the following file: `routes/data/contact-info.ts` where you will refer this action like so:

```ts
export { action } from "~/containers/ContactInfoForm/server";
```

We also define this route in utils/constants.ts

```ts
export const ROUTE_DATA_CONTACT_INFO = "/data/contact-info";
```

##### index.ts

Create a client side validator from the schema by using the withZod helper.

Use the getTypedFields helper to have typescript typing, so you cannot use incorrect names for form fields.

in this case the following file will be created:

```tsx
const formValidator = withZod(formInputSchema);
const { TextField, RadioFields } = getTypedFields(formInputSchema);

type Props = {
  fetcher: Fetcher;
  contactInfo: ContactInfo; // use these as default values
};

export function ContactInfoForm({ fetcher, contactInfo }: Props) {
  return (
    <ValidatedForm // will take care of clientside validating
      validator={formValidator}
      method="post"
      fetcher={fetcher}
      action={ROUTE_DATA_CONTACT_INFO} // Where does the request needs to go?
      defaultValues={contactInfo}
    >
      <RadioFields name="gender" items={GENDER_RADIO_FIELDS} />
      <TextField label="Voornaam" name="first_name" />
      <TextField label="Tussenvoegsel" name="prefix_surname" />
      <TextField label="Achternaam" name="surname" />
      <TextField label="Telefoonnummer" name="telephone" />
      <SubmitBtn size="sm">Opslaan</SubmitBtn> // will take care of loading state
    </ValidatedForm>
  );
}
```

#### 7. Putting it all together

The last thing is using the container component in our page:

```tsx
export function AccountContactInfo() {
  const fetcher = useFetcher();

  useFetcherNotifier(fetcher, () => alert("This will be called onSuccess"));

  const { contactInfo } = useLoaderData<AccountContactInfoPageData>();

  return (
    <>
      <Text>Hello world</Text>
      <ContactInfoForm contactInfo={contactInfo} fetcher={fetcher} />
    </>
  );
}
```

You should be able now to mutate the data!
