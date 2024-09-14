import { Slider } from "~/components/Slider";
import { Container } from "~/components/Container";
import { Heading } from "~/components/Typography";
import { SimplifiedProduct } from "~/schema/product";
import { ProductCard } from "./styled";

type Props = {
  title: string;
  products: SimplifiedProduct[];
};

export function ProductSlider({ title, products }: Props) {
  return (
    <div>
      <Container>
        <Heading mb={4} as="h2" variant="xl">
          {title}
        </Heading>
      </Container>
      <Slider spacing={2}>
        {products.map((product) => (
          <ProductCard
            key={product.guid}
            product={product}
            withAddToProduct={false}
            withDeliveryRow
          />
        ))}
      </Slider>
    </div>
  );
}
