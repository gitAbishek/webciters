import { Li, Root } from "~/components/CheckList/styled";

type Props = {
  items: string[];
};

export function CheckList({ items }: Props) {
  return (
    <Root>
      {items.map((item) => (
        <Li key={item}>{item}</Li>
      ))}
    </Root>
  );
}
