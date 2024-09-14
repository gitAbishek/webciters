import styled from "@emotion/styled";

const variants = {
  black: {
    background: "var(--color-black)",
    color: "var(--color-white)",
  },
  red: {
    background: "var(--color-primary)",
    color: "var(--color-white)",
  },
  grey: {
    background: "var(--color-gray-04)",
    color: "var(--color-black)",
  },
} as const;

export type Variants = keyof typeof variants;

type Props = {
  variant: Variants;
  size?: number;
};

export const Tag = styled.span<Props>`
  padding: 0 var(--space-2);
  background-color: ${({ variant }) => variants[variant].background};
  color: ${({ variant }) => variants[variant].color};
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
  font-weight: var(--font-weight-medium);
  border-radius: 0.2rem;
`;
