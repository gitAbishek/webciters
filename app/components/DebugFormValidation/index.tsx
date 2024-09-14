import { useFormContext } from "remix-validated-form";
import { Text } from "~/components/Typography";

// Place this component in a form to debug the client side validation.
export function DebugFormValidation() {
  const form = useFormContext();
  // eslint-disable-next-line no-console
  console.log(form);

  return (
    <Text>
      Form validatie debugging is actief. Bekijk de console voor de resultaten.
    </Text>
  );
}
