import { Date, Description, Details, Root, Wrapper } from "./styled";
import { Heading } from "~/components/Typography";
import { ReviewStars } from "~/components/ReviewStars";
import { RatingRow } from "~/pages/CmsPage/groups/ReviewLister/Reviews/RatingRow";
import { Review } from "~/schema/cmsObjects";

type Props = {
  review: Review;
};

export function ReviewCard({ review }: Props) {
  return (
    <Root>
      <Wrapper>
        <Heading as="h3">{review.description_short}</Heading>
        <Details>
          <ReviewStars rating={review.rating_total} />
          <Date variant="sm">{review.date}</Date>
        </Details>
        <Description>{review.description_long}</Description>
        {review.rating_price && (
          <RatingRow label="Prijs/Kwaliteit" rating={review.rating_price} />
        )}
        {review.rating_communication && (
          <RatingRow
            label="Communicatie"
            rating={review.rating_communication}
          />
        )}
        {review.rating_rapidity && (
          <RatingRow
            label="Snelheid/Levertijd"
            rating={review.rating_rapidity}
          />
        )}
      </Wrapper>
    </Root>
  );
}
