import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import { Container } from "~/components/Container";
import { CompletedHeading } from "./CompletedHeading";
import { NewsletterDiscount } from "./NewsletterDiscount";
import { OrderInfo } from "./OrderInfo";
import { MaxWidthWrapper } from "./styled";
import { OrderThankYouData } from "~/routes/bedankt";

export function OrderThankYou() {
  const { order } = useLoaderData<OrderThankYouData>();
  useEffect(() => {
    const productsForGtag = order.products.map((product) => ({
      id: product.guid,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    }));

    const orderForGtag = {
      id: order.guid,
      order_number: order.order_number,
      total_amount_incl_tax: order.total_amount_incl_tax,
      total_amount: order.total_amount,
      order_date: order.order_date,
      shipping_cost: order.shipping_costs,
      products: productsForGtag,
    };

    gtag("event", "purchase", { order: orderForGtag });
  }, [order]);
  return (
    <Container>
      <MaxWidthWrapper>
        <CompletedHeading order={order} />
        <NewsletterDiscount />
        <OrderInfo order={order} />
      </MaxWidthWrapper>
    </Container>
  );
}
