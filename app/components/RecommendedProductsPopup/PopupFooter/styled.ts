import styled from "@emotion/styled";
import { mq } from "~/utils/style";

export const PopupFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-4);

  ${mq.lg} {
    padding: var(--space-6);
  }
`;

export const FooterButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);

  ${mq.lg} {
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
`;
