import { ErrorBoxFileUpload } from "~/components/FileUpload/ErrorBoxes/ErrorBoxFileUpload";
import { Stack } from "~/components/Stack";

type Props = {
  filesExceededMaxSize: File[];
  filesTypeMisMatch: File[];
  filesExceededMaxAmount: File[];
  handleCloseErrorBoxMaxSize: () => void;
  handleCloseErrorBoxFileType: () => void;
  handleCloseErrorBoxMaxAmount: () => void;
  allowedFileExtensions: string[];
  maxAmountOfFiles: number;
  maxFileSize: number;
};

export function ErrorBoxes({
  filesExceededMaxSize,
  filesTypeMisMatch,
  filesExceededMaxAmount,
  handleCloseErrorBoxMaxSize,
  handleCloseErrorBoxFileType,
  handleCloseErrorBoxMaxAmount,
  allowedFileExtensions,
  maxAmountOfFiles,
  maxFileSize,
}: Props) {
  return (
    <Stack gap={3} direction="column">
      {filesExceededMaxSize.length > 0 && (
        <ErrorBoxFileUpload
          files={filesExceededMaxSize}
          onClose={handleCloseErrorBoxMaxSize}
          title={`Bestand is te groot (Max ${maxFileSize}MB):`}
        />
      )}

      {filesTypeMisMatch.length > 0 && (
        <ErrorBoxFileUpload
          files={filesTypeMisMatch}
          onClose={handleCloseErrorBoxFileType}
          title={`De volgende Bestandtype's zijn toegestaan (${allowedFileExtensions.join(
            ", "
          )}):`}
        />
      )}

      {filesExceededMaxAmount.length > 0 && (
        <ErrorBoxFileUpload
          files={filesExceededMaxAmount}
          title={`Maximaal ${maxAmountOfFiles} bestanden toegestaan:`}
          onClose={handleCloseErrorBoxMaxAmount}
        />
      )}
    </Stack>
  );
}
