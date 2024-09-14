import styled from "@emotion/styled";
import { Text } from "~/components/Typography";

export const AdvicePrice = styled(Text)`
  color: var(--color-gray-50);
  text-decoration: line-through;
  margin-left: var(--space-2);
`;

export const AdvicePriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const Price = styled(Text)`
  display: block;
  color: var(--color-primary);
  font-size: var(--font-size-xl);
  margin-right: var(--space-2);
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: var(--space-3);
`;
