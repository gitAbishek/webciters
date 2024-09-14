import { useLoaderData, useNavigate, useFetcher } from "@remix-run/react";
import { Heading } from "~/components/Typography";
import { AccountContactInfoPageData } from "~/routes/account/voorkeuren/contact-info";
import { useFetcherNotifier } from "~/containers/SubmitNotifier/hooks";
import { ContactInfoForm } from "~/containers/ContactInfoForm";

export function AccountContactInfo() {
  const navigate = useNavigate();
  const fetcher = useFetcher();

  useFetcherNotifier(fetcher, () => navigate("../"));

  const { contactInfo } = useLoaderData<AccountContactInfoPageData>();

  return (
    <>
      <Heading as="h2" mb={6}>
        Persoonlijke gegevens
      </Heading>
      <ContactInfoForm contactInfo={contactInfo} fetcher={fetcher} />
    </>
  );
}
