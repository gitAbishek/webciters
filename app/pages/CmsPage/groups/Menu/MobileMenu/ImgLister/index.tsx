import { ImgListerElement } from "~/schema/cmsElements";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";
import {
  Img,
  Wrapper,
} from "~/pages/CmsPage/groups/Menu/DesktopMenu/ImgLister/styled";
import { Link } from "~/components/Link";
import { Stack } from "~/components/Stack";

type Props = { data: ImgListerElement };

export function ImgLister({ data }: Props) {
  return (
    <Stack gap={2} justify="space-between" align="center">
      <MarkdownRenderer content={data.markdown_content} />
      <Wrapper>
        {data.media.map((item) => (
          <Link key={item.url + item.image_url} to={item.url}>
            <Img src={item.image_url} alt={item.image_alt} />
          </Link>
        ))}
      </Wrapper>
    </Stack>
  );
}
