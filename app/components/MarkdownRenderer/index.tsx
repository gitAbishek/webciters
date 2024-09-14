import { HTMLAttributes } from "react";
import { Heading, Text } from "~/components/Typography";
import { Link } from "~/components/Link";
import { useRemarkSync } from "~/utils/remark";
import { HeadingNodeTypes } from "~/components/Typography/heading";
import { Table } from "~/components/MarkdownRenderer/styled";
import { Variants } from "~/components/Typography/styled";

type Props = {
  content: string;
  paragraphVariant?: Variants;
};

const h1 = makeHeading("h1");
const h2 = makeHeading("h2");
const h3 = makeHeading("h3");
const h4 = makeHeading("h4");
const h5 = makeHeading("h5");

export function MarkdownRenderer({ content, paragraphVariant = "sm" }: Props) {
  return useRemarkSync(content, {
    rehypeReactOptions: {
      components: {
        p: (props) => (
          <Text variant={paragraphVariant} mb={2}>
            {props.children}
          </Text>
        ),
        h1,
        h2,
        h3,
        h4,
        h5,
        a: (props) => {
          if (!props.href) return null;

          return (
            <Link to={props.href} isUnderlined>
              {props.children}
            </Link>
          );
        },
        table: (props) => <Table>{props.children}</Table>,
        th: (props) => <th>{props.children}</th>,
        td: (props) => <td>{props.children}</td>,
      },
    },
  });
}

function makeHeading(tag: HeadingNodeTypes) {
  return function headingWrapper(props: HTMLAttributes<HTMLHeadingElement>) {
    return (
      <Heading as={tag} id={props.id} mt={2} mb={1}>
        {props.children}
      </Heading>
    );
  };
}
