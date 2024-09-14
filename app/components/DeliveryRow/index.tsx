import { CheckIcon } from "~/components/Icon";
import { Stack } from "~/components/Stack";
import { EllipsesText, Root } from "~/components/DeliveryRow/styled";

type Props = {
  title: string;
  subtitle: string | null;
};

export function DeliveryRow({ title, subtitle }: Props) {
  return (
    <Root>
      <Stack spacing={1} align="center">
        <CheckIcon size="sm" color="green" />
        <EllipsesText variant="sm">{title}</EllipsesText>
      </Stack>
      {subtitle && (
        <EllipsesText mt={1} variant="xs">
          {subtitle}
        </EllipsesText>
      )}
    </Root>
  );
}
