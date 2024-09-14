import { Stack } from "~/components/Stack";
import { CheckIcon, CloseIcon } from "~/components/Icon";
import { Text } from "~/components/Typography";
import { PopupHeaderWrapper } from "./styled";
import { AccessibleButton } from "~/components/AccessibleButton";

type Props = {
  handleClosePopup: () => void;
  addedProductText?: string;
};

export function PopupHeader({ handleClosePopup, addedProductText }: Props) {
  return (
    <PopupHeaderWrapper gap={2} direction="column">
      <Stack gap={4} justify="space-between">
        <Stack gap={2} align="center" justify="flex-start">
          <CheckIcon color="white" size="md" />
          <Text color="white">Toegevoegd aan winkelmand</Text>
        </Stack>
        <AccessibleButton type="button" onClick={handleClosePopup}>
          <CloseIcon color="white" size="md" />
        </AccessibleButton>
      </Stack>
      {addedProductText && (
        <Stack pr={4}>
          <Text color="white">{addedProductText}</Text>
        </Stack>
      )}
    </PopupHeaderWrapper>
  );
}
