// These are for client side use

export function getCookies(): Record<string, string> {
  return Object.fromEntries(
    document.cookie.split(/; */).map((cookie) => cookie.split("=", 2))
  );
}

type CookieNames = "consent";

export function setCookie(
  name: CookieNames,
  value: string,
  maxAgeInDays = 180
) {
  let cookie = `${name}=${value}`;

  if (maxAgeInDays) {
    cookie += `; max-age=${60 * 60 * 24 * maxAgeInDays}`;
  }

  document.cookie = cookie;
}

export function deleteCookie(name: CookieNames) {
  document.cookie = `${name}=; max-age=0`;
}

export function cookieExists(name: CookieNames) {
  return name in getCookies();
}
