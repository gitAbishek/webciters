import { useFetcher } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { ValidatedForm } from "remix-validated-form";
import { withZod } from "@remix-validated-form/with-zod";
import {
  Button,
  Field,
  InputButtonWrapper,
} from "~/containers/DiscountCode/styled";
import { ToggleExpand } from "~/components/ToggleExpand";
import { formInputSchema } from "./schema";
import { useFetcherNotifier } from "~/containers/SubmitNotifier/hooks";

const validator = withZod(formInputSchema);

const action = "/data/discount-code";

export function DiscountCode() {
  const fetcher = useFetcher();
  const ref = useRef<HTMLFormElement>(null);

  useFetcherNotifier(fetcher);

  useEffect(() => {
    if (fetcher.state === "idle" && !fetcher.data?.error) {
      ref.current?.reset();
    }
  }, [fetcher.state, fetcher.data]);

  return (
    <ValidatedForm
      validator={validator}
      formRef={ref}
      fetcher={fetcher}
      action={action}
      method="post"
    >
      <ToggleExpand title="Kortingscode toevoegen">
        <InputButtonWrapper>
          <Field label="Voeg kortingscode toe" name="discount_code" />
          <Button>Gebruiken</Button>
        </InputButtonWrapper>
      </ToggleExpand>
    </ValidatedForm>
  );
}
