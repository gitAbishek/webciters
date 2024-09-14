import { z, ZodEffects, ZodObject, ZodType } from "zod";

// source copied from https://github.com/airjp73/remix-validated-form/blob/main/packages/zod-form-data/src/helpers.ts
// To understand how this lib works and tweak it a bit, the idea is to not have to include this library at all in the future

const preprocessIfValid = (schema: z.ZodTypeAny) => (val: unknown) => {
  const result = schema.safeParse(val);
  if (result.success) return result.data;
  return val;
};

/**
 * Transforms any empty strings to `null` before validating.
 * This makes it so empty strings will fail required checks,
 * allowing you to use `optional` for optional fields instead of `nonempty` for required fields.
 * If you call `zfd.text` with no arguments, it will assume the field is a required string by default.
 * If you want to customize the schema, you can pass that as an argument.
 */
const stripEmpty = z.literal("").transform(() => null);

export function text<T extends z.ZodTypeAny>(schema: T) {
  return z.preprocess(preprocessIfValid(stripEmpty), schema);
}

export function numeric<T extends z.ZodTypeAny>(schema: T) {
  return z.preprocess(
    preprocessIfValid(
      z.union([
        stripEmpty,
        z
          .string()
          .transform((val) => Number(val))
          .refine((val) => !Number.isNaN(val)),
      ])
    ),
    schema
  );
}

const entries = z.array(z.tuple([z.string(), z.any()]));

type FormDataType = {
  <T extends z.ZodRawShape>(shape: T): ZodEffects<ZodObject<T>>;
  <T extends z.ZodTypeAny>(schema: T): ZodEffects<T>;
};

export const formData: FormDataType = <T extends z.ZodRawShape | z.ZodTypeAny>(
  shapeOrSchema: T
) =>
  z.preprocess(
    preprocessIfValid(
      // We're avoiding using `instanceof` here because different environments
      // won't necessarily have `FormData` or `URLSearchParams`
      z
        .any()
        .refine((val) => Symbol.iterator in val)
        .transform((val) => [...val])
        .refine(
          (val): val is z.infer<typeof entries> =>
            entries.safeParse(val).success
        )
        .transform((data): Record<string, unknown | unknown[]> => {
          const map: Map<string, unknown[]> = new Map();

          // eslint-disable-next-line no-restricted-syntax
          for (const [key, value] of data) {
            if (map.has(key)) {
              map.get(key)!.push(value);
            } else {
              map.set(key, [value]);
            }
          }

          return [...map.entries()].reduce((acc, [key, value]) => {
            acc[key] = value.length === 1 ? value[0] : value;
            return acc;
          }, {} as Record<string, unknown | unknown[]>);
        })
    ),
    shapeOrSchema instanceof ZodType ? shapeOrSchema : z.object(shapeOrSchema)
  );

export const checkbox = () =>
  z.union([
    z.literal("on").transform(() => true),
    z.literal(undefined).transform(() => false),
  ]);
