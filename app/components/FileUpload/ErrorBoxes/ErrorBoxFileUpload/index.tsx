import { CloseButton, ErrorBoxWrapper } from "./styled";
import { Text } from "~/components/Typography";
import { Stack } from "~/components/Stack";
import { CloseIcon } from "~/components/Icon";

type Props = {
  files: File[];
  onClose: () => void;
  title?: string;
};

export function ErrorBoxFileUpload({ files, onClose, title }: Props) {
  return (
    <ErrorBoxWrapper>
      <Stack justify="space-between" align="flex-start" gap={2}>
        <Stack direction="column" gap={2}>
          <Text variant="md" weight="bold">
            {title}
          </Text>
          <div>
            {files.map((file) => (
              <Text key={file.name} variant="sm" weight="bold">
                {file.name} ({`${(file.size / 1048576).toFixed(2)} MB`})
              </Text>
            ))}
          </div>
        </Stack>
        <CloseButton type="button" onClick={onClose}>
          <CloseIcon size="md" />
        </CloseButton>
      </Stack>
    </ErrorBoxWrapper>
  );
}
