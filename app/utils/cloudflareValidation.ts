export async function cloudflareValidation(
  ip: string,
  token: FormDataEntryValue
) {
  const formData = new FormData();

  formData.append("secret", process.env.cloudflare_turnstile_secret || "");
  formData.append("response", token);
  if (ip) {
    formData.append("remoteip", ip);
  }

  const result = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      body: formData,
      method: "POST",
    }
  );

  const outcome = await result.json();

  return outcome.success as boolean;
}
