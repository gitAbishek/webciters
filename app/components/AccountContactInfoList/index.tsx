import { ContactInfo } from "~/schema/contactInfo";
import { Text } from "~/components/Typography";
import { Stack } from "~/components/Stack";

type Props = {
  contactInfo: ContactInfo;
};

export function AccountContactInfoList({ contactInfo }: Props) {
  const { surname, prefix_surname, first_name, email, telephone } = contactInfo;

  return (
    <Stack direction="column" gap={2}>
      <Text variant="md" mt={2}>
        {first_name} {prefix_surname} {surname}
      </Text>
      <Text variant="md">{email}</Text>
      {telephone && <Text variant="md">{telephone}</Text>}
    </Stack>
  );
}
