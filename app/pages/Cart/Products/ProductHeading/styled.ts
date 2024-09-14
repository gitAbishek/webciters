import styled from "@emotion/styled";
import { Text } from "~/components/Typography";

export const StockText = styled(Text)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: var(--space-2);

  &:before {
    content: "";
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 100%;
    margin-right: var(--space-3);
    background: var(--color-green);
  }
`;
