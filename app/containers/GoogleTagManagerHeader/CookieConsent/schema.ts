import { z } from "zod";
import { checkbox, formData } from "~/utils/zodFormHelpers";

export const inputSchema = formData({
  necessary: checkbox(),
  preferences: checkbox(),
  statistics: checkbox(),
  marketing: checkbox(),
});

export type InputSchema = z.infer<typeof inputSchema>;
