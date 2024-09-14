import { z, ZodRawShape } from "zod";

export function errorOr<T extends ZodRawShape>(orValue: T) {
  return z.discriminatedUnion("success", [
    z.object({
      success: z.literal(true),
      response: z.object(orValue),
    }),
    z.object({ success: z.literal(false), error: z.string() }),
  ]);
}

export const result = errorOr({});

export function firstItem<T>(array: T[]) {
  return array[0];
}

export function firstItemOrNull<T>(array: T[]) {
  return array.length === 1 ? array[0] : null;
}
