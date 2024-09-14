import { SimplifiedProduct } from "~/schema/product";
import { Root } from "~/components/RecommendedProductsPopup/PopupBody/styled";
import { TinyProductSlider } from "~/components/TinyProductSlider";

type Props = {
  title: string;
  products: SimplifiedProduct[];
};

export function PopupBody({ products, title }: Props) {
  return (
    <Root>
      <TinyProductSlider title={title} products={products} />
      <hr />
    </Root>
  );
}
