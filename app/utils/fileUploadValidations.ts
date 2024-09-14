import { getFileExtension } from "~/utils/getFileExtension";

export function validateFileTypes(
  files: File[],
  allowedFileExtensions: (string | undefined)[]
) {
  const validFiles = files.filter((file) =>
    allowedFileExtensions.includes(getFileExtension(file.name))
  );

  const invalidFiles = files.filter(
    (file) => !allowedFileExtensions.includes(getFileExtension(file.name))
  );

  return {
    validFiles,
    invalidFiles,
  };
}

export function validateFileSizeLimit(files: File[], maxFileSize: number) {
  const validFiles = files.filter((file) => file.size <= maxFileSize);
  const invalidFiles = files.filter((file) => file.size > maxFileSize);

  return {
    validFiles,
    invalidFiles,
  };
}

export function validateFileAmountLimit(
  files: File[],
  maxAmountOfFiles: number,
  approvedFilesLength: number
) {
  const validFiles = files.slice(0, maxAmountOfFiles - approvedFilesLength);
  const invalidFiles = files.slice(
    maxAmountOfFiles - files.length + 1,
    files.length
  );

  return {
    validFiles,
    invalidFiles,
  };
}
