export const ROUTE_CONTACT = "/contact";
export const ROUTE_CHECKOUT_DETAIL = "/bestellen";
export const ROUTE_CHECKOUT_SHIPPING = "/bestellen/verzending";
export const ROUTE_CHECKOUT_PAYMENT = "/bestellen/betaalwijze";
export const ROUTE_CHECKOUT_OVERVIEW = "/bestellen/overzicht";
export const ROUTE_LOGIN = "/login";
export const ROUTE_HOME = "/";
export const ROUTE_PASSWORD_FORGET = "/wachtwoord-vergeten";
export const ROUTE_REGISTER = "/registreren";
export const ROUTE_ACCOUNT = "/account";
export const ROUTE_ACCOUNT_LOGOUT = "/account/logout";
export const ROUTE_ACCOUNT_PREFERENCES = "/account/voorkeuren";
export const ROUTE_ACCOUNT_PREFERENCES_CONTACT_INFO =
  "/account/voorkeuren/contact-info";
export const ROUTE_ACCOUNT_PREFERENCES_LOGIN_INFO =
  "/account/voorkeuren/login-info";
export const ROUTE_ACCOUNT_PREFERENCES_ADDRESS_OVERVIEW =
  "/account/voorkeuren/adressen";
export const ROUTE_ACCOUNT_PREFERENCES_ADDRESS_DETAIL =
  "/account/voorkeuren/adressen/:id";
export const ROUTE_ACCOUNT_PREFERENCES_ADDRESS_NEW =
  "/account/voorkeuren/adressen/nieuw";
export const ROUTE_ACCOUNT_PREFERENCES_NEWSLETTER_STATUS =
  "/account/voorkeuren/nieuwsbrief";
export const ROUTE_ACCOUNT_ORDERS = "/account/bestellingen";
export const ROUTE_ACCOUNT_ORDER_DETAIL = "/account/bestellingen/:id";
export const ROUTE_ACCOUNT_ORDER_INVOICE =
  "/account/bestellingen/:invoiceId/factuur";
export const ROUTE_SEARCH = "/zoeken";
export const ROUTE_TERMS_AND_CONDITIONS = "/algemene-voorwaarden";
export const ROUTE_PRIVACY_POLICY = "/privacy-policy";

export const ROUTE_WISHLIST = "/verlanglijst";
export const ROUTE_CART = "/winkelwagen";

export const KIYOH_PUBLIC_LINK =
  "//www.kiyoh.com/reviews/1043772/outletduiven_nl";

export const SESSION_TOKEN_KEY = "token";
export const SESSION_CART_KEY = "cart";
export const SESSION_RECENTLY_VIEWED_KEY = "rvpl_guid";

export const GENDER_RADIO_FIELDS = [
  { label: "Dhr.", value: "Male" },
  { label: "Mvr.", value: "Female" },
];
export const ROUTE_DATA_ADDRESS_FORM = "/data/address-form";
export const ROUTE_DATA_VALIDATE_CART = "/data/validate-cart";
export const ROUTE_DATA_START_PAYMENT = "/data/start-payment";
export const ROUTE_DATA_LOGIN_INFO = "/data/login-info";
export const ROUTE_DATA_CONTACT_INFO = "/data/contact-info";
export const ROUTE_DATA_CART_DETAILS_FORM = "/data/checkout/details-form";
export const ROUTE_DATA_CHECKOUT_SHIPPING_FORM = "/data/checkout/shipping-form";
export const ROUTE_DATA_CHECKOUT_PAYMENT_FORM = "/data/checkout/payment-form";
export const ROUTE_DATA_WISHLIST_FAVORITE = "/data/wishlist-favorite";
export const ROUTE_DATA_CART = "/data/cart";
export const ROUTE_DATA_RECOMMENDED_PRODUCTS =
  "/data/recommended-products/:spli_guid";
export const ROUTE_SERVICE_REQUEST = "/data/service-request";
export const ROUTE_SERVICE_KLANTENSERVICE = "/service/klantenservice ";

// Scripts
export const ROUTE_SCRIPTS_GTM = "/scripts/gtm.js";

// The forms in checkout needs to be submitted with buttons outside the form,
// By giving them a unique identifier we can submit them outside of the form
// These ids should be unique through the whole website

export const FORM_ID_CHECKOUT_DETAILS = "FORM_ID_CHECKOUT_DETAILS";
export const FORM_ID_CHECKOUT_SHIPPING = "FORM_ID_CHECKOUT_SHIPPING";
export const FORM_ID_CHECKOUT_PAYMENT = "FORM_ID_CHECKOUT_PAYMENT";

// NEWSLETTER FORM
export const FORM_ID_NEWSLETTER_FOOTER = "FORM_ID_NEWSLETTER_FOOTER";

// Some language
export const NO_IMAGE_FOUND = "Geen afbeelding gevonden";
