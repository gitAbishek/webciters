import { deleteCookie, getCookies } from "~/utils/cookies";

type Preferences = {
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
};

export function preferenceToString(prefs: Preferences) {
  return [
    Number(prefs.preferences),
    Number(prefs.marketing),
    Number(prefs.statistics),
  ].join(".");
}

export function stringToPreference(string: string): Preferences {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [preferences, marketing, statistics] = string
    .split(".")
    .map((v) => Boolean(Number(v)));

  return {
    preferences,
    marketing,
    statistics,
  };
}

export function syncConsentWithCookies() {
  const cookies = getCookies();

  if (!("consent" in cookies)) {
    return;
  }

  try {
    const prefs = stringToPreference(cookies.consent);

    gtag("consent", "update", {
      ad_storage: boolToString(prefs.marketing),
      analytics_storage: boolToString(prefs.statistics),
      personalization_storage: boolToString(prefs.preferences),
    });
  } catch (e) {
    deleteCookie("consent");
  }
}

export function boolToString(value: boolean) {
  return value ? "granted" : "denied";
}
