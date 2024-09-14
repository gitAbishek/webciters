import { formData, checkbox } from "~/utils/zodFormHelpers";

export const formInputSchema = formData({
  subscription_status: checkbox(),
});
