import { MarkdownElement } from "~/schema/cmsElements";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";

type Props = {
  data: MarkdownElement;
};

export function Markdown({ data }: Props) {
  return <MarkdownRenderer content={data.markdown_content} />;
}
