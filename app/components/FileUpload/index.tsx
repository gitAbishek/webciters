import { useRef, useState } from "react";
import { BinIcon, UploadIcon } from "~/components/Icon";
import { Heading, Text } from "~/components/Typography";
import {
  CloseButton,
  EllipseWrapper,
  FilesWrapper,
  FileUploadButton,
  FileUploadWrapper,
  Input,
  Root,
  StackFile,
  StackFw,
  TextEllipses,
  UploadImage,
} from "./styled";
import { ErrorBoxes } from "./ErrorBoxes";
import { Stack } from "~/components/Stack";
import {
  validateFileAmountLimit,
  validateFileSizeLimit,
  validateFileTypes,
} from "~/utils/fileUploadValidations";

type Props = {
  allowedFileExtensions: string[];
  maxAmountOfFiles?: number;
  maxFileSize?: number;
  files: File[];
  setFiles: (files: File[]) => void;
};

export function FileUpload({
  allowedFileExtensions,
  maxAmountOfFiles = 1,
  maxFileSize = 1000000,
  files,
  setFiles,
}: Props) {
  const [filesExceededMaxSize, setFilesExceededMaxSize] = useState<File[]>([]);
  const [filesTypeMisMatch, setFilesTypeMisMatch] = useState<File[]>([]);
  const [filesExceededMaxAmount, setFilesExceededMaxAmount] = useState<File[]>(
    []
  );
  const fileInput = useRef<HTMLInputElement>(null);

  return (
    <Root>
      <ErrorBoxes
        filesExceededMaxSize={filesExceededMaxSize}
        filesTypeMisMatch={filesTypeMisMatch}
        filesExceededMaxAmount={filesExceededMaxAmount}
        handleCloseErrorBoxMaxSize={handleCloseErrorBoxMaxSize}
        handleCloseErrorBoxFileType={handleCloseErrorBoxFileType}
        handleCloseErrorBoxMaxAmount={handleCloseErrorBoxMaxAmount}
        allowedFileExtensions={allowedFileExtensions}
        maxAmountOfFiles={maxAmountOfFiles}
        maxFileSize={Math.round(maxFileSize / 1048576)}
      />

      <Stack direction="column" gap={8} mb={4}>
        <Stack justify="space-between" align="flex-end">
          <div>
            <Heading as="h2" weight="bold" mt={3} mb={2}>
              Foto&apos;s {files.length > 0 && `(${files.length})`}
            </Heading>
            <Text>
              <i>Maximaal {maxAmountOfFiles} foto&apos;s toegestaan</i>
            </Text>
          </div>
          <FileUploadWrapper>
            <Input
              type="file"
              multiple
              ref={fileInput}
              onChange={handleInputChange}
            />
            <FileUploadButton
              type="button"
              onClick={handleButtonClick}
              size="md"
            >
              <UploadIcon size="sm" color="white" />
              <Stack ml={1}>Upload</Stack>
            </FileUploadButton>
          </FileUploadWrapper>
        </Stack>
        <hr />
      </Stack>

      {files.length > 0 && (
        <FilesWrapper>
          {files.map((file) => (
            <StackFile
              key={`${file.name}`}
              justify="flex-start"
              align="center"
              gap={4}
            >
              <CloseButton
                type="button"
                size="sm"
                onClick={() => removeFile(file)}
              >
                <BinIcon size="md" color="white" />
              </CloseButton>
              <StackFw
                direction="column"
                justify="flex-start"
                align="flex-start"
                gap={2}
              >
                <UploadImage src={file ? URL.createObjectURL(file) : ""} />
                <EllipseWrapper>
                  <TextEllipses variant="sm" weight="semi-bold">
                    {file.name}
                  </TextEllipses>
                </EllipseWrapper>
              </StackFw>
            </StackFile>
          ))}
        </FilesWrapper>
      )}
    </Root>
  );

  function handleInputChange() {
    // Captures the new files
    const inputFiles = fileInput.current?.files;

    if (!inputFiles) return;

    // Array of current file names to remove duplicates
    const currentFileNames = files.map((file) => file.name);

    // Remove duplicates
    const allFiles = [...inputFiles].filter(
      (file) => !currentFileNames.includes(file.name)
    );

    // Validate files.

    // Returns {validFiles: File[], invalidFiles: File[]}
    const validatedFileTypes = validateFileTypes(
      allFiles,
      allowedFileExtensions
    );

    // Returns {validFiles: File[], invalidFiles: File[]}
    const validatedFileSizes = validateFileSizeLimit(
      validatedFileTypes.validFiles,
      maxFileSize
    );

    // Files that went over the file amount limit
    const validatedFileAmountLimits = validateFileAmountLimit(
      validatedFileSizes.validFiles,
      maxAmountOfFiles,
      files.length
    );

    // All allowed files
    const { validFiles } = validatedFileAmountLimits;

    // If files are found that are over the size limit throw an error displaying the files that are over the size limit
    setFilesExceededMaxSize(validatedFileSizes.invalidFiles);

    // If files are found with invalid filetypes throw an error displaying the files that have an invalid file type
    setFilesTypeMisMatch(validatedFileTypes.invalidFiles);

    // If files are over the maximum allowed files limit throw an error displaying the files that are over the files amount limit
    setFilesExceededMaxAmount(validatedFileAmountLimits.invalidFiles);

    // Add the valid files to the Files variable.
    if (validFiles) {
      setFiles([...files, ...validFiles]);
    }
  }

  // Remove files
  async function removeFile(file: File) {
    // Get files without the delete files and set the files
    const newFiles = files.filter((fileItem) => fileItem !== file);
    setFiles(newFiles);

    if (fileInput.current) {
      // Reset the input value so u can upload the same picture again after removing
      fileInput.current.value = "";
    }

    // Remove error on files change
    setFilesExceededMaxAmount([]);
  }

  // Close error box for maximum filesize error
  function handleCloseErrorBoxMaxSize() {
    setFilesExceededMaxSize([]);
  }

  // Close error box for maximum files amount error
  function handleCloseErrorBoxMaxAmount() {
    setFilesExceededMaxAmount([]);
  }

  // Close error box for file types mismatch
  function handleCloseErrorBoxFileType() {
    setFilesTypeMisMatch([]);
  }

  // Click the fileInput when clicking the upload button
  function handleButtonClick() {
    fileInput.current?.click();
  }
}
