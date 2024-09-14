import { Content, Top, TotalRating, KiyohLogo, Title } from "./styled";
import { ReviewStars } from "~/components/ReviewStars";
import { Link } from "~/components/Link";
import { ReviewCard } from "./ReviewCard";
import { Slider } from "~/components/Slider";
import { ReviewsElement } from "~/schema/cmsElements";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";

type Props = {
  data: ReviewsElement;
};

export function Reviews({ data }: Props) {
  return (
    <>
      <Content>
        <Top>
          <Title>
            <MarkdownRenderer content={data.markdown_content} />
          </Title>
          <TotalRating>{data.average_score}</TotalRating>
          <div>
            <ReviewStars rating={data.average_score} />
            <Link to={data.urls.url}>{data.total_count} reviews</Link>
          </div>
          <KiyohLogo src={data.image_url} alt={data.image_alt} />
        </Top>
      </Content>
      <Slider gradientColor="gray-04" spacing={2}>
        {data.reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </Slider>
    </>
  );
}
