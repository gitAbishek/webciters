import { Newsletter } from "~/containers/Newsletter";
import { NewsletterBlockGroup } from "~/schema/cmsGroups";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";

type Props = {
  data: NewsletterBlockGroup;
};

export function NewsletterBlock({ data }: Props) {
  return (
    <Newsletter>
      <MarkdownRenderer content={data.elements.markdown_content} />
    </Newsletter>
  );
}
