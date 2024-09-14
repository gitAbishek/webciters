import { Stack } from "~/components/Stack";
import { Root } from "./styled";
import { ImageTextElement } from "~/schema/cmsElements";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";

type Props = {
  data: ImageTextElement;
};

export function ImageText({ data }: Props) {
  return (
    <Root>
      <Stack gap={3} align="flex-start">
        {data.media && (
          <img src={data.media.image_url} alt={data.media.image_alt} />
        )}
        <div>
          <MarkdownRenderer content={data.markdown_content} />
        </div>
      </Stack>
    </Root>
  );
}
