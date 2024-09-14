import styled from "@emotion/styled";
import { mq } from "~/utils/style";

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);

  ${mq.lg} {
    display: none;
  }
`;
