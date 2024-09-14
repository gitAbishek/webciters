import { ReactNode } from "react";
import { Container } from "~/components/Container";
import { Link, Item, Img } from "./styled";
import { LinkProps } from "~/components/Link";
import { Slider } from "~/components/Slider";
import { Heading, Text } from "~/components/Typography";

export type Submission = {
  name: string;
  imgUrl: string;
};

type Props = {
  title: string;
  content: ReactNode;
  link: LinkProps;
  submissions: Submission[];
};

export function InstagramBlock({ title, content, link, submissions }: Props) {
  return (
    <div>
      <Container>
        <Heading mb={2} as="h2">
          {title}
        </Heading>
        {content}
        <Link to={link.to}>{link.label}</Link>
      </Container>
      <Slider spacing={2}>
        {submissions.map((submission) => (
          <Item key={submission.imgUrl}>
            <Img
              src={submission.imgUrl}
              alt={`Instagram foto van ${submission.name}`}
            />
            <Text variant="sm">{submission.name}</Text>
          </Item>
        ))}
      </Slider>
    </div>
  );
}
