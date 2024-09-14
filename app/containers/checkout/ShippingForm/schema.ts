import { z } from "zod";
import { formData, numeric } from "~/utils/zodFormHelpers";

export const formInputSchema = formData({
  delivery_option_id: numeric(z.number()),
});
