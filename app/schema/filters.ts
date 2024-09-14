import { z } from "zod";

export const possibleFilterValue = z.object({
  id: z.number(),
  name: z.string(),
  amount: z.number(),
});

export const possibleFilter = z.object({
  id: z.number(),
  name: z.string(),
  explanation: z.string().nullable(),
  possible_filter_values: z.array(possibleFilterValue),
});

export const subTag = z.object({
  name: z.string(),
  url: z.string(),
});

export type PossibleFilter = z.infer<typeof possibleFilter>;
export type PossibleFilterValue = z.infer<typeof possibleFilterValue>;
