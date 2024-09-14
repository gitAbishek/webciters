import styled from "@emotion/styled";
import { Text } from "~/components/Typography";
import { Tag } from "~/components/Tag";

export const Root = styled.div`
  display: flex;
  margin-top: var(--space-2);
`;

export const AdvicePrice = styled(Text)`
  position: relative;
  overflow: hidden;
  color: var(--color-gray-50);
  margin-right: var(--space-3);
  text-decoration: line-through;
`;

export const Price = styled(Text)`
  color: var(--color-primary);
`;

export const DiscountTag = styled(Tag)`
  margin-left: var(--space-2);
`;
