import chairImage from "~/resources/images/chair.jpg";
import { SimplifiedProduct } from "~/schema/product";

export const PRODUCT: SimplifiedProduct = {
  guid: "adef98a6-9523-4432-b91a-c57dce805a07",
  price: 150,
  suggested_price: 300,
  name: "Maxfurn Eetkamerstoel Amara Mos",
  brand: "Riverdale",
  delivery_statement: "Vandaag voor 12:00 besteld, dezelfde dag verstuurd",
  url: "/product-1",
  primary_thumbnail_url: chairImage,
  primary_thumbnail_alt: "Stoel",
  stock_classification: "Op voorraad",
  stock: 12,
};

export const WISHLIST_PRODUCTS = [
  PRODUCT,
  PRODUCT,
  PRODUCT,
  PRODUCT,
  PRODUCT,
  PRODUCT,
];
