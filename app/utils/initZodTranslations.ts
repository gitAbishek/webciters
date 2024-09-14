import { z } from "zod";

const errorMap: z.ZodErrorMap = (issue, ctx) => {
  if (issue.code === "invalid_type" && issue.received === "null") {
    return { message: "Gelieve dit veld in te voeren" };
  }

  if (issue.code === "too_small") {
    return {
      message: `Dit veld moet minimaal ${issue.minimum} tekens te bevatten`,
    };
  }

  if (issue.code === "invalid_string" && issue.validation === "email") {
    return { message: "Het ingevulde e-mailadres is niet correct" };
  }

  return { message: ctx.defaultError };
};

export function initZodTranslations() {
  z.setErrorMap(errorMap);
}
