import styled from "@emotion/styled";
import { Stack } from "~/components/Stack";
import { AccessibleButton } from "~/components/AccessibleButton";
import { ChevronDownIcon as ChevronDownIconRaw } from "~/components/Icon";

type FilterProps = {
  hasPadding?: boolean;
};

type BaseProps = {
  isActive: boolean;
  hasPadding?: boolean;
};

export const Root = styled(Stack)<FilterProps>`
  padding: ${({ hasPadding }) => (hasPadding ? "" : "var(--space-4)")};
  background-color: ${({ hasPadding }) =>
    hasPadding ? "" : "var(--color-gray-04)"};
`;

export const TitleIconWrapper = styled(AccessibleButton)<FilterProps>`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  flex-direction: ${({ hasPadding }) => hasPadding && "row-reverse"};
  justify-content: ${({ hasPadding }) => hasPadding && "space-between"};
`;

export const ToggleBox = styled.div`
  flex-direction: column;
  display: flex;
`;

export const ChevronDownIcon = styled(ChevronDownIconRaw)<BaseProps>`
  transition: 0.2s transform ease;
  transform: ${({ isActive, hasPadding }) =>
    (!isActive && "rotate(0deg)") ||
    (!isActive && !hasPadding && "rotate(-90deg)") ||
    (isActive && hasPadding && "rotate(-180deg)")};
`;
