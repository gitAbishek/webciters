import { formData, text } from "~/utils/zodFormHelpers";
import { password } from "~/schema/field";

export const formInputShape = formData({
  old_password: text(password),
  new_password: text(password),
  new_password_repeated: text(password),
}).refine((data) => data.new_password === data.new_password_repeated, {
  message: "Wachtwoorden komen niet overeen",
  path: ["new_password_repeated"], // path of error
});
