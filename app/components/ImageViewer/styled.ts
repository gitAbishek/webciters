import styled from "@emotion/styled";
import { Button } from "~/components/Button";

export const PopupWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: var(--z-index-popup-box);
  padding: var(--space-13);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopupOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Image = styled.img`
  height: 100%;
  object-fit: contain;
`;

export const ContentWrapper = styled.div`
  height: 100%;
  position: relative;
`;

export const CloseButton = styled(Button)`
  position: absolute;
  top: var(--space-2);
  right: var(--space-2);
  border-radius: var(--border-radius);
  padding: var(--space-1);
`;
