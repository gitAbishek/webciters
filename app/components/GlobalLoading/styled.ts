import styled from "@emotion/styled";

export type Props = {};

export const Progress = styled.div`
  background-color: var(--color-gray-13);
  height: 0.5rem;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
`;

export const ProgressBar = styled.div`
  background-color: var(--color-primary);
  position: absolute;
  bottom: 0;
  top: 0;
  width: 50%;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-name: indeterminate-progress-bar;

  @keyframes indeterminate-progress-bar {
    from {
      left: -50%;
    }
    to {
      left: 100%;
    }
  }
`;
