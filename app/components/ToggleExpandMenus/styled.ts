import styled from "@emotion/styled";
import { AccessibleButton } from "~/components/AccessibleButton";
import { ChevronDownIcon as ChevronDownIconRaw } from "~/components/Icon";

type BaseProps = {
  isActive: boolean;
};

export const TitleIconWrapper = styled(AccessibleButton)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  width: 100%;
`;

export const ToggleBox = styled.div`
  flex-direction: column;
  display: flex;
  padding-bottom: var(--space-2);
`;

export const ChevronDownIcon = styled(ChevronDownIconRaw)<BaseProps>`
  transition: 0.2s transform ease;
  transform: ${({ isActive }) =>
    !isActive ? "rotate(0deg)" : "rotate(180deg)"};
`;
