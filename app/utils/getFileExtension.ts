export function getFileExtension(fileName: string) {
  const splitted = fileName.split(".");
  return splitted.at(-1)?.toLowerCase();
}
