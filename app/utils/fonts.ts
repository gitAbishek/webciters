import { HtmlLinkDescriptor } from "@remix-run/react";

export const fonts: HtmlLinkDescriptor[] = [
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap",
  },
];
