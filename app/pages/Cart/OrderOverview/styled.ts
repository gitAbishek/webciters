import styled from "@emotion/styled";
import { Button as ButtonRaw } from "~/components/Button";
import { mq } from "~/utils/style";

export const OrderOverviewWrapper = styled.div`
  background-color: var(--color-gray-04);
  padding: var(--space-4);

  ${mq.lg} {
    padding: var(--space-8);
  }
`;

export const StickyWrapper = styled.div`
  position: sticky;
  top: var(--space-4);

  ${mq.lg} {
    width: 40rem;
    max-width: 100%;
  }
`;

export const Button = styled(ButtonRaw)`
  display: block;
  margin-top: var(--space-6);
`;

export const DiscountWrapper = styled.div`
  margin-bottom: var(--space-4);
  background-color: var(--color-gray-04);
  padding: var(--space-4);

  ${mq.lg} {
    padding: 0 var(--space-4);
  }
`;
