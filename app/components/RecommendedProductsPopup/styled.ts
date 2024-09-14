import styled from "@emotion/styled";
import { Stack } from "~/components/Stack";
import { mq } from "~/utils/style";

export const PopupWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: var(--z-index-popup-box);
  display: flex;
  align-items: flex-end;

  ${mq.lg} {
    align-items: center;
    justify-content: center;
  }
`;

export const PopupContent = styled.div`
  width: 100%;
  background-color: white;
  z-index: 1;

  ${mq.lg} {
    position: relative;
    max-width: 60rem;
    height: auto;
  }
`;

export const PopupFooter = styled(Stack)`
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`;

export const PopupOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
