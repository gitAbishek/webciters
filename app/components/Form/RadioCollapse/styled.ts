import styled from "@emotion/styled";
import { mq } from "~/utils/style";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`;

export const HeadWrapper = styled.div`
  padding: var(--space-4);
  border: 0.1rem solid var(--color-gray-20);
  border-radius: 0.4rem;
  cursor: pointer;

  ${mq.lg} {
    padding: var(--space-6);
  }
`;

export const Icon = styled.img`
  width: 2.6rem;
  height: 2.4rem;
  object-fit: contain;
`;

export const Circle = styled.div`
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  border: 0.05rem solid rgba(0, 0, 0, 0.2);
  margin-right: var(--space-2);
  border-radius: 50%;
`;

export const CollapseWrapper = styled.div`
  display: none;
  padding-right: var(--space-13);
`;

export const Input = styled.input`
  display: none;

  &:checked + .head-wrapper .circle {
    border-color: var(--color-primary);
    border-width: 0.6rem;
  }

  &:checked + .head-wrapper .collapse-wrapper {
    display: block;
  }

  &:checked + .head-wrapper {
    border-color: var(--color-primary);
  }
`;
