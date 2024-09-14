import { Root, Star } from "./styled";
import starHalf from "~/resources/images/Stars/starhalf.svg";
import starFilled from "~/resources/images/Stars/starfilled.svg";
import { uniqueKey } from "~/utils/loops";

type Props = {
  rating: number; // on scale of 0 - 10
};

type StarAsDigit = 1 | 0.5;

export function ReviewStars({ rating }: Props) {
  // change scale from 10 to 5;
  const ratingBy5 = Math.round(rating) / 2;

  const starsAsDigits: StarAsDigit[] = new Array(Math.floor(ratingBy5)).fill(1);

  // Has the rating .5 value, eg: 3.5, 4.5
  if (ratingBy5 % 1 > 0) {
    starsAsDigits.push(0.5);
  }

  // return new Array(10).fill(null).map(() => );
  return (
    <Root>
      {starsAsDigits.map((v) => (
        <Star
          key={uniqueKey()}
          src={v === 1 ? starFilled : starHalf}
          alt={v === 1 ? "Star full" : "Star half"}
        />
      ))}
    </Root>
  );
}
