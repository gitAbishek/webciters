import { MarkdownOnlyGroupCentered } from "~/schema/cmsGroups";
import { Markdown } from "~/pages/CmsPage/elements/Markdown";
import { Container } from "~/components/Container";
import { Center } from "./styled";

type Props = {
  data: MarkdownOnlyGroupCentered;
};

export function MarkdownOnlyCentered({ data }: Props) {
  return (
    <Container>
      <Center>
        {data.elements.map((element) => (
          <Markdown key={element.id} data={element} />
        ))}
      </Center>
    </Container>
  );
}
