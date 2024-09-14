import { ImgListerElement } from "~/schema/cmsElements";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";
import {
  Img,
  Root,
  Wrapper,
} from "~/pages/CmsPage/groups/Menu/DesktopMenu/ImgLister/styled";
import { Link } from "~/components/Link";

type Props = { data: ImgListerElement };

export function ImgLister({ data }: Props) {
  return (
    <Root>
      <MarkdownRenderer content={data.markdown_content} />
      <Wrapper>
        {data.media.map((item) => (
          <Link key={item.url + item.image_url} to={item.url}>
            <Img src={item.image_url} alt={item.image_alt} />
          </Link>
        ))}
      </Wrapper>
    </Root>
  );
}
