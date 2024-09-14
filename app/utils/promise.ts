import { AwaitedRecord } from "~/utils/types";

export async function waitParallel<T extends Record<string, Promise<unknown>>>(
  obj: T
): Promise<AwaitedRecord<T>> {
  const operations = Object.entries(obj).map(async ([key, val]) => [
    key,
    await val,
  ]);

  const awaitedOperations = await Promise.all(operations);

  return Object.fromEntries(awaitedOperations);
}
