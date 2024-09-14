import { MarkdownOnlyGroup } from "~/schema/cmsGroups";
import { Markdown } from "~/pages/CmsPage/elements/Markdown";
import { Container } from "~/components/Container";

type Props = {
  data: MarkdownOnlyGroup;
};

export function MarkdownOnly({ data }: Props) {
  return (
    <Container>
      {data.elements.map((element) => (
        <Markdown key={element.id} data={element} />
      ))}
    </Container>
  );
}
