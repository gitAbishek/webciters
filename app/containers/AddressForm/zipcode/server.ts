import { getSession } from "~/utils/session";
import { zipcodeFormInputSchema } from "../schema";
import { postZipcode } from "~/api/zipcode";
import { clearTokenAndRedirectWhenUnauthenticated } from "~/utils/auth";
import { DataFunctionArgs } from "~/utils/types";

export type AddressFieldsAndCheckActionData =
  | {
      success: false;
      error: string;
    }
  | { success: true; street: string; city: string };

export const action = async ({
  request,
}: DataFunctionArgs): Promise<AddressFieldsAndCheckActionData> => {
  const session = await getSession(request);

  const formData = await request.formData();
  const formValues = zipcodeFormInputSchema.parse(formData);

  try {
    const result = await postZipcode(session, formValues, {});

    if (!result.success) {
      return {
        success: false,
        error: result.error,
      };
    }

    return {
      success: true,
      street: result.response.street,
      city: result.response.city,
    };
  } catch (e) {
    await clearTokenAndRedirectWhenUnauthenticated(e, request);
    throw e;
  }
};
