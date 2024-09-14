type Envs = "WEBSITE_URL" | "NOVULO_REST_API" | "GTM_ID";

export function getRequiredEnv(env: Envs) {
  const envValue = process.env[env];
  if (!envValue) throw new Error(`process.env.${env} is not defined!`);
  return envValue;
}
