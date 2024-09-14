export function compareObjects(
  a: Record<string, string>,
  b: Record<string, string>
) {
  return Object.entries(a).toString() === Object.entries(b).toString();
}
