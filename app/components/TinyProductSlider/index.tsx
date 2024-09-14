import { Slider } from "~/components/Slider";
import { Heading } from "~/components/Typography";
import { SimplifiedProduct } from "~/schema/product";
import { ProductCard } from "./styled";

type Props = {
  title: string;
  products: SimplifiedProduct[];
};

export function TinyProductSlider({ title, products }: Props) {
  return (
    <div>
      <Heading mb={6} as="h4" variant="md" weight="semi-bold">
        {title}
      </Heading>
      <Slider spacing={2} hasOffset={false}>
        {products.map((product) => (
          <ProductCard
            key={product.guid}
            product={product}
            withAddToProduct
            withRecommendedPopup={false}
            withDeliveryRow={false}
          />
        ))}
      </Slider>
    </div>
  );
}
