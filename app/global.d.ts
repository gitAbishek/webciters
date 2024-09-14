// extended and minimal version of https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/gtag.js/index.d.ts
// extended consent with: personalization_storage

declare const gtag: Gtag.Gtag;
declare namespace Gtag {
  interface Gtag {
    (
      command: "consent" | "event",
      consentArg: ConsentArg,
      consentParams: ConsentParams | AddOrRemoveProductParams | PurchaseParams
    ): void;
  }

  type ConsentArg =
    | "default"
    | "update"
    | "add_to_cart"
    | "remove_from_cart"
    | "purchase";

  type Product = {
    id: string;
    name: string;
    price: number;
    quantity: number;
  };

  type Combideal = {
    name: "Combideal";
    products: Product[];
  };

  type Order = {
    id: string;
    order_number: string;
    total_amount_incl_tax: number;
    total_amount: number;
    order_date: string;
    shipping_cost: number;
    products: Product[];
  };

  interface ConsentParams {
    ad_storage?: "granted" | "denied" | undefined;
    personalization_storage?: "granted" | "denied" | undefined;
    analytics_storage?: "granted" | "denied" | undefined;
    wait_for_update?: number | undefined;
    region?: string[] | undefined;
  }

  interface AddOrRemoveProductParams {
    name?: "Combideal";
    products: Product[];
  }

  interface PurchaseParams {
    order: Order;
  }
}
