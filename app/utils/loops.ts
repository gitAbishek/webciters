// eslint-disable-next-line no-plusplus

let lastKey = 0;

export function uniqueKey() {
  lastKey += 1;
  return `unique-${lastKey}`;
}
