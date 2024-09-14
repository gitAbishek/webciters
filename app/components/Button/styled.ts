import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Sizes } from "./index";

type BtnProps = {
  variant: Variants;
  size: Sizes;
  isLoading?: boolean;
};

const variants = {
  primary: {
    bg: "var(--color-primary)",
    color: "white",
    border: "var(--color-primary)",
    loading: "var(--color-primary-70)",
  },
  secondary: {
    bg: "var(--color-secondary)",
    color: "white",
    border: "var(--color-secondary)",
    loading: "var(--color-secondary-70)",
  },
  outline: {
    bg: "none",
    color: "black",
    border: "rgba(0,0,0,0.2)",
    loading: "none",
  },
} as const;

export type Variants = keyof typeof variants;

const sizes = {
  sm: "var(--space-3) var(--space-6)",
  md: "var(--space-4) var(--space-6)",
} as const;

export const isLoadingAnimation = keyframes`
  0% {
    left: 0;
    width: 0
  }

  50% {
    left: 0;
    width: 100%
  }

  to {
    left: 100%;
    width: 0
  }
`;

export const Btn = styled.button<BtnProps>`
  border: 0.1rem solid;
  font-weight: var(--font-weight-semi-bold);
  border-radius: var(--border-radius);
  display: inline-flex;
  padding: ${({ size }) => sizes[size]};
  background: ${({ variant }) => variants[variant].bg};
  color: ${({ variant }) => variants[variant].color};
  border-color: ${({ variant }) => variants[variant].border};
  font-size: var(--font-size-md);
  position: relative;
  background: ${({ variant, isLoading }) =>
    isLoading ? variants[variant].loading : variants[variant].bg};
  align-items: center;
  justify-content: center;
  pointer-events: ${({ isLoading }) => isLoading && "none"};
  cursor: ${({ isLoading }) => (isLoading ? "wait" : "pointer")};
  transition: background-color ease 0.2s;

  &:after {
    display: ${({ isLoading }) => (isLoading ? "block" : "none")};
    cursor: ${({ isLoading }) => (isLoading ? "wait" : "pointer")};
    animation: ${isLoadingAnimation} 1s infinite;
    background-color: ${({ variant }) => variants[variant].border};
    content: "";
    height: 0.5rem;
    position: absolute;
    left: 0;
    top: 0;
  }

  &[disabled] {
    cursor: auto;
    opacity: 0.2;
  }
`;
