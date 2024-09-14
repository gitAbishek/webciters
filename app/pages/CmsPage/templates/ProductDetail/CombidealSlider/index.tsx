import { Slider } from "~/components/Slider";
import { CombidealCard } from "~/pages/CmsPage/templates/ProductDetail/CombidealSlider/CombidealCard";
import { Heading } from "~/components/Typography";
import { Container } from "~/components/Container";
import { Combideal } from "~/schema/product";

type Props = {
  combideals: Combideal[];
};

export function CombidealSlider({ combideals }: Props) {
  return (
    <div>
      <Container>
        <Heading as="h2" mb={4}>
          Combideals
        </Heading>
      </Container>

      <Slider spacing={2}>
        {combideals.map((combideal) => (
          <CombidealCard key={combideal.guid} combideal={combideal} />
        ))}
      </Slider>
    </div>
  );
}
