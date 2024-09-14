import { ReactNode } from "react";
import { Root } from "./styled";
import { Container } from "~/components/Container";

type Props = {
  children: ReactNode;
};

export function FixedBanner({ children }: Props) {
  return (
    <Root>
      <Container>{children}</Container>
    </Root>
  );
}
