import { useFetcher, useNavigate } from "@remix-run/react";
import { Heading } from "~/components/Typography";
import { useFetcherNotifier } from "~/containers/SubmitNotifier/hooks";
import { LoginInfoForm } from "~/containers/LoginInfoForm";

export function AccountLoginInfo() {
  const navigate = useNavigate();
  const fetcher = useFetcher();

  useFetcherNotifier(fetcher, () => navigate("../"));

  return (
    <>
      <Heading as="h2" mb={6}>
        Inloggegevens
      </Heading>
      <LoginInfoForm fetcher={fetcher} />
    </>
  );
}
