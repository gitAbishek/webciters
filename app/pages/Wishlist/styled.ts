import styled from "@emotion/styled";
import { mq } from "~/utils/style";
import { Container as ContainerBase } from "~/components/Container";
import { FavIcon } from "~/components/Icon";

export const Container = styled(ContainerBase)`
  margin-top: var(--space-2);

  ${mq.md} {
    margin-top: var(--space-8);
  }
`;

export const Grid = styled.div`
  display: grid;
  margin-top: var(--space-4);
  margin-bottom: var(--space-8);
  column-gap: var(--space-8);
  row-gap: var(--space-8);

  ${mq.md} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  ${mq.lg} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const InlineFav = styled(FavIcon)`
  display: inline-block;
`;
