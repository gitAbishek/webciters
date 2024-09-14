import { IconMarkdownElement } from "~/schema/cmsElements";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";
import { Img, Item } from "~/pages/CmsPage/elements/IconMarkdown/styled";
import { NO_IMAGE_FOUND } from "~/utils/constants";
import noImageSvg from "~/resources/images/no-image.svg";
import { Size } from "~/utils/style";

type Props = {
  data: IconMarkdownElement;
  gap?: Size;
  smallerIcon?: boolean;
};

export function IconMarkdown({
  data: { markdown_content, media },
  gap = 5,
  smallerIcon = false,
}: Props) {
  return (
    <Item gap={gap}>
      {media && (
        <Img
          smallerIcon={smallerIcon}
          src={media.image_url || noImageSvg}
          alt={media.image_alt || NO_IMAGE_FOUND}
        />
      )}
      <MarkdownRenderer content={markdown_content} />
    </Item>
  );
}
