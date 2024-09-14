import { createCookieSessionStorage } from "@remix-run/node";

const cookieSessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 180, // 6 months
    path: "/",
    sameSite: "lax",
    secrets: ["HnQj6ITpkUN4dvDLfmvYwFGaOHVypBKY"],
    secure: process.env.NODE_ENV === "production",
  },
});

export function getSession(request: Request) {
  return cookieSessionStorage.getSession(request.headers.get("Cookie"));
}

export const { commitSession } = cookieSessionStorage;
