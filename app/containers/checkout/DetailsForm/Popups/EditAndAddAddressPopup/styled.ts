import styled from "@emotion/styled";
import { Stack } from "~/components/Stack";

type AddressPopupProps = {
  isActive: boolean;
};

export const AddressPopupWrapper = styled.div<AddressPopupProps>`
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
  z-index: var(--z-index-popup-box);
`;

export const InnerWrapper = styled.div`
  max-width: 40rem;
  width: 100%;
  background: white;
`;

export const TitleWrapper = styled(Stack)`
  background-color: var(--color-secondary);
  padding: var(--space-4);
`;

export const Content = styled.div``;

export const ButtonStack = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--space-2);
`;

export const StackScrollable = styled(Stack)`
  max-height: 60rem;
  overflow: auto;
  padding: var(--space-4);
  padding-bottom: 0;

  .footer {
    box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.1);
    padding: var(--space-4);
    margin-left: calc(var(--space-4) * -1);
    width: calc(100% + (var(--space-4) * 2));
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: var(--space-4);
    margin-top: var(--space-8);

    button,
    a {
      flex: 1;
      margin: auto;
      padding: var(--space-4) var(--space-6);

      &[variant="secondary"] {
        background: none;
        color: black;
        border-color: rgba(0, 0, 0, 0.2);
      }
    }
  }
`;
