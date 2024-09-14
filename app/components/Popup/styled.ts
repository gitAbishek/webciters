import styled from "@emotion/styled";
import { Stack } from "~/components/Stack";

export const PopupWrapper = styled.div`
  display: flex;
  position: fixed;
  inset: 0;
  align-items: center;
  justify-content: center;
  z-index: var(--z-index-popup-box);
`;

export const PopupOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const InnerWrapper = styled.div`
  max-width: 40rem;
  width: 100%;
  background: white;
  z-index: 1;
`;

export const TitleWrapper = styled(Stack)`
  background-color: var(--color-secondary);
  padding: var(--space-4);
`;
