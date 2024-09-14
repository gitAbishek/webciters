import { LinkButtonWithMargin, Wrapper } from "./styled";
import { Container } from "~/components/Container";
import { HeroBannerContentElement } from "~/schema/cmsElements";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";

type Props = {
  data: HeroBannerContentElement;
  size:
    | "hero-banner-content"
    | "hero-banner-content-large"
    | "hero-banner-content-medium"
    | "hero-banner-content-small";
};

export function HeroBannerContent({ data, size }: Props) {
  return (
    <Container>
      <Wrapper size={size} imageUrl={data.media?.image_url}>
        {data.markdown_content && (
          <MarkdownRenderer content={data.markdown_content} />
        )}
        {data.urls && (
          <LinkButtonWithMargin to={data.urls.url}>
            {data.urls.name}
          </LinkButtonWithMargin>
        )}
      </Wrapper>
    </Container>
  );
}
