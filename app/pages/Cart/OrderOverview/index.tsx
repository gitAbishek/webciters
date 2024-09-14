import { DiscountWrapper, OrderOverviewWrapper, StickyWrapper } from "./styled";
import { Heading } from "~/components/Typography";
import { Stack } from "~/components/Stack";
import { OrderLine } from "~/components/OrderLine";
import { PaymentIcons } from "~/components/PaymentIcons";
import { DiscountCode } from "~/containers/DiscountCode";
import { Button } from "~/components/Button";
import { Cart } from "~/schema/cart";
import { getProductQuantitySum } from "~/utils/cart";

type Props = {
  cart: Cart;
  validateCart: () => void;
  validateCartIsLoading: boolean;
};

export function OrderOverview({
  cart,
  validateCartIsLoading,
  validateCart,
}: Props) {
  const totalShippingCost = cart.shipping?.price;
  const sumOfSuggestedPrices = getSumOfSuggestedPrices(cart);
  const sumOfPrices = getSumOfPrices(cart);
  const diffBetweenSuggestedPriceAndPrice = sumOfSuggestedPrices - sumOfPrices;
  const cartCount = getProductQuantitySum(cart.products);

  return (
    // This div is for the Sticky child. It calculates the height.
    <div>
      <DiscountWrapper>
        <DiscountCode />
      </DiscountWrapper>
      <StickyWrapper>
        <OrderOverviewWrapper>
          <hr />
          <Heading as="h2" mt={2} mb={2}>
            Besteloverzicht
          </Heading>
          <Stack spacing={3} direction="column">
            <OrderLine
              name={`Totaal artikelen (${cartCount})`}
              value={sumOfSuggestedPrices}
              bold
            />

            {!!diffBetweenSuggestedPriceAndPrice && (
              <OrderLine
                name="Je bespaart"
                value={diffBetweenSuggestedPriceAndPrice}
              />
            )}

            <hr />
            <OrderLine
              name="Subtotaal"
              value={cart.subtotal_excl_shipping}
              bold
            />
            <OrderLine
              name="Verzendkosten"
              value={totalShippingCost || 0}
              bold
            />
            <hr />

            {/* <OrderLine name="Monteren op plaats" value={49.0} bold /> */}

            {cart.discount_codes.length > 0 && (
              <>
                {cart.discount_codes.map((discountCode) => (
                  <OrderLine
                    key={discountCode.code}
                    name={`Kortingscode ${discountCode.code}`}
                    value={-discountCode.discount_price}
                    bold
                  />
                ))}
                <hr />
              </>
            )}

            <OrderLine
              name="Totaal (incl. btw)"
              value={cart.total_price_incl_discount}
              bold
              big
            />
            <Button onClick={validateCart} isLoading={validateCartIsLoading}>
              Ik ga bestellen
            </Button>
            <PaymentIcons />
          </Stack>
        </OrderOverviewWrapper>
      </StickyWrapper>
    </div>
  );
}

function getSumOfSuggestedPrices(cart: Cart) {
  return cart.products.reduce(
    (sum, product) =>
      sum + (product.suggested_price ?? product.price) * product.quantity,
    0
  );
}

function getSumOfPrices(cart: Cart) {
  return cart.products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
}
