import styled from "@emotion/styled";
import { mq } from "~/utils/style";

export const SideBySideOnMd = styled.div`
  display: grid;
  gap: var(--space-6);

  ${mq.md} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ResponsiveGrid = styled.div`
  display: grid;
  gap: var(--space-4);

  ${mq.md} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
