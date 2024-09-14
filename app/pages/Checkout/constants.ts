import {
  ROUTE_CHECKOUT_DETAIL,
  ROUTE_CHECKOUT_OVERVIEW,
  ROUTE_CHECKOUT_PAYMENT,
  ROUTE_CHECKOUT_SHIPPING,
} from "~/utils/constants";

export const PAGES_INFO = {
  detail: {
    label: "Gegevens",
    route: ROUTE_CHECKOUT_DETAIL,
  },
  shipping: {
    label: "Verzending",
    route: ROUTE_CHECKOUT_SHIPPING,
  },
  payment: {
    label: "Betaalwijze",
    route: ROUTE_CHECKOUT_PAYMENT,
  },
  overview: {
    label: "Overzicht",
    route: ROUTE_CHECKOUT_OVERVIEW,
  },
};
