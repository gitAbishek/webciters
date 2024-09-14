import { useMatch } from "react-router";
import { SidebarWrapper } from "./styled";
import { Heading, Text } from "~/components/Typography";
import { Product } from "~/pages/Checkout/Layout/Sidebar/Product";
import { OrderLine } from "~/components/OrderLine";
import { Stack } from "~/components/Stack";
import { useCart } from "~/containers/Cart/hooks";
import { SubmitBtn } from "~/components/Form/SubmitBtn";
import {
  FORM_ID_CHECKOUT_DETAILS,
  FORM_ID_CHECKOUT_PAYMENT,
  FORM_ID_CHECKOUT_SHIPPING,
  ROUTE_CHECKOUT_DETAIL,
  ROUTE_CHECKOUT_OVERVIEW,
  ROUTE_CHECKOUT_PAYMENT,
  ROUTE_CHECKOUT_SHIPPING,
  ROUTE_PRIVACY_POLICY,
  ROUTE_TERMS_AND_CONDITIONS,
} from "~/utils/constants";
import { Link } from "~/components/Link";
import { useValidateCart } from "~/containers/ValidateCart/hooks";
import { Button } from "~/components/Button";
import { useStartPayment } from "~/containers/StartPayment/hooks";
import { getProductQuantitySum } from "~/utils/cart";

export function Sidebar() {
  const cart = useCart();

  const { startPayment, isLoading: isStartPaymentCallLoading } =
    useStartPayment();

  const { validate, isLoading: isValidating } = useValidateCart(startPayment);

  const isDetailTab = useMatch(ROUTE_CHECKOUT_DETAIL);
  const isShipmentTab = useMatch(ROUTE_CHECKOUT_SHIPPING);
  const isPaymentTab = useMatch(ROUTE_CHECKOUT_PAYMENT);
  const isOverviewTab = useMatch(ROUTE_CHECKOUT_OVERVIEW);

  function getFormId() {
    if (isDetailTab) return FORM_ID_CHECKOUT_DETAILS;
    if (isShipmentTab) return FORM_ID_CHECKOUT_SHIPPING;
    if (isPaymentTab) return FORM_ID_CHECKOUT_PAYMENT;
    return undefined;
  }

  if (!cart) return null;

  const totalShippingCost = cart.shipping?.price;

  return (
    <div>
      <SidebarWrapper direction="column" gap={6}>
        <div>
          <Heading as="h2" variant="lg" mb={2}>
            Je bestelling
          </Heading>
          <Text>{getProductQuantitySum(cart.products)} Product(en)</Text>
        </div>
        {cart.products.map((product) => (
          <Product key={product.guid} product={product} />
        ))}
        <hr />
        <Stack spacing={1} direction="column">
          <OrderLine
            name="Subtotaal"
            value={cart.subtotal_excl_shipping}
            bold
          />
          <OrderLine name="Verzendkosten" value={totalShippingCost || 0} bold />
        </Stack>
        {cart.discount_codes.length > 0 && (
          <>
            <hr />
            {cart.discount_codes.map((discountCode) => (
              <OrderLine
                key={discountCode.code}
                name={`Kortingscode ${discountCode.code}`}
                value={-discountCode.discount_price}
                bold
              />
            ))}
          </>
        )}
        <hr />
        <OrderLine
          name="Totaal (incl. btw)"
          value={cart.total_price_incl_discount}
          bold
          big
        />
        {isOverviewTab ? (
          <>
            <Button
              onClick={validate || isStartPaymentCallLoading}
              isLoading={isValidating}
            >
              Bestellen en betalen
            </Button>
            <Text variant="xs">
              Met jouw bestelling ga je akkoord met onze{" "}
              <Link to={ROUTE_PRIVACY_POLICY} isUnderlined>
                privacybeleid
              </Link>{" "}
              en{" "}
              <Link to={ROUTE_TERMS_AND_CONDITIONS} isUnderlined>
                algemene voorwaarden
              </Link>
              .
            </Text>
          </>
        ) : (
          <SubmitBtn form={getFormId()}>Volgende</SubmitBtn>
        )}
      </SidebarWrapper>
    </div>
  );
}
