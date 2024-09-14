import { Root } from "./styled";
import { ReviewStars } from "~/components/ReviewStars";
import { Text } from "~/components/Typography";

type Props = {
  rating: number;
  label: string;
};

export function RatingRow({ rating, label }: Props) {
  return (
    <Root>
      <Text weight="semi-bold" variant="md">
        {label}
      </Text>
      <ReviewStars rating={rating} />
    </Root>
  );
}
