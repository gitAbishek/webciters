import styled from "@emotion/styled";
import { Text } from "~/components/Typography";
import { Button } from "~/components/Button";
import { mq } from "~/utils/style";
import { Stack } from "~/components/Stack";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  width: 100%;
`;

export const TextNoWrap = styled(Text)`
  display: none;

  ${mq.md} {
    white-space: nowrap;
    display: block;
  }
`;

export const FilterButton = styled(Button)`
  display: inline-flex;
  gap: var(--space-2);
  align-items: center;

  ${mq.md} {
    display: none;
  }
`;

export const ProductOverviewOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: space-between;
  justify-items: left;
  grid-gap: var(--space-4);

  ${mq.md} {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
  }
`;

export const StackSortWrapper = styled(Stack)`
  justify-self: end;

  ${mq.md} {
    justify-self: initial;
  }
`;

export const GridBlock = styled.div`
  display: grid;
  gap: var(--space-4);
  margin-top: var(--space-4);
  grid-template-columns: repeat(2, minmax(0, 1fr));

  ${mq.sm} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  ${mq.lg} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;
