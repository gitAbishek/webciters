import { useNavigate } from "@remix-run/react";
import { Products } from "~/pages/Cart/Products";
import { OrderOverview } from "~/pages/Cart/OrderOverview";
import { Container } from "~/components/Container";
import { Row } from "./styled";
import { useCart } from "~/containers/Cart/hooks";
import { NoCartFound } from "~/pages/Cart/NoCartFound";
import { useValidateCart } from "~/containers/ValidateCart/hooks";
import { ROUTE_CHECKOUT_DETAIL } from "~/utils/constants";
import { StickyOrderButton } from "~/pages/Cart/StickyOrderButton";

export function Cart() {
  const navigate = useNavigate();
  const cart = useCart();
  const { validate, isLoading } = useValidateCart(() =>
    navigate(ROUTE_CHECKOUT_DETAIL)
  );

  if (!cart || cart.products.length === 0) return <NoCartFound />;

  return (
    <Container>
      <Row>
        <Products products={cart.products} />
        <OrderOverview
          cart={cart}
          validateCart={validate}
          validateCartIsLoading={isLoading}
        />
        <StickyOrderButton
          totalPrice={cart.total_price_incl_discount}
          validateCart={validate}
          validateCartIsLoading={isLoading}
        />
      </Row>
    </Container>
  );
}
