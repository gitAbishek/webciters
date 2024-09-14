import styled from "@emotion/styled";
import { mq } from "~/utils/style";

export const StickyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-4);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  z-index: 1;

  ${mq.lg} {
    display: none;
  }
`;
