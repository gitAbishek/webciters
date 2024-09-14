import { ReviewRatingElement } from "~/schema/cmsElements";
import { ReviewStars } from "~/components/ReviewStars";
import { Stack } from "~/components/Stack";
import { Text } from "~/components/Typography";

type Props = {
  data: ReviewRatingElement;
};

export function ReviewRating({ data }: Props) {
  return (
    <Stack gap={1} align="center">
      <ReviewStars rating={data.review_rating.average_score} />
      <Text variant="sm">({data.review_rating.average_score})</Text>
    </Stack>
  );
}
