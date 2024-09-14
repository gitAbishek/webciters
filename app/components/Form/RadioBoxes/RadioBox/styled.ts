import styled from "@emotion/styled";
import { Text } from "~/components/Typography";
import { Stack } from "~/components/Stack";
import { mq } from "~/utils/style";

export const HeadWrapper = styled(Stack)`
  border: 0.2rem solid var(--color-gray-20);
  border-radius: 0.4rem;
  cursor: pointer;
  padding: var(--space-4);

  ${mq.lg} {
    padding: var(--space-6);
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`;

export const Circle = styled.div`
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  border: 0.05rem solid rgba(0, 0, 0, 0.2);
  margin-right: var(--space-2);
  border-radius: 50%;
`;

export const Input = styled.input`
  display: none;

  &:checked + .head-wrapper {
    border-color: var(--color-primary);

    .circle {
      border-color: var(--color-primary);
      border-width: 0.6rem;
    }

    .collapse-wrapper {
      display: block;
    }
  }
`;

export const TextRight = styled(Text)`
  margin-left: auto;
`;
