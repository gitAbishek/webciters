import styled from "@emotion/styled";
import { Stack } from "~/components/Stack";
import { mq } from "~/utils/style";

export const PopupWrapper = styled.div`
  display: flex;
  position: fixed;
  inset: 0;
  align-items: center;
  justify-content: center;
  z-index: var(--z-index-popup-box);

  ${mq.md} {
    display: none;
  }
`;

export const PopupOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const InnerWrapper = styled.div`
  background: white;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`;

export const Content = styled.div`
  padding: var(--space-4);
  padding-top: 0;
  display: flex;
  flex: 1;
  overflow-y: auto;
`;

export const FiltersWrapper = styled.div`
  padding-bottom: 14rem;

  hr:last-of-type {
    display: none;
  }
`;

export const TitleWrapper = styled(Stack)`
  background-color: var(--color-secondary);
  padding: var(--space-4);
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: flex-end;
  gap: var(--space-3);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: var(--space-4);
  background-color: white;
  box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.1);

  button {
    width: 100%;
  }
`;

export const ButtonDeleteFilters = styled.button`
  p {
    text-decoration: underline;
  }
`;
