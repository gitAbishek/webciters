import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingIndicator = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border: 0.02rem solid;
  border-radius: 100%;
  border-color: var(--color-gray-13);
  border-right-color: var(--color-gray-60);
  animation: ${rotate} 1s linear infinite;
`;
