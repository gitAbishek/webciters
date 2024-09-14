import styled from "@emotion/styled";
import { Stack } from "~/components/Stack";
import { mq } from "~/utils/style";
import { asDataUrl } from "~/components/Icon/Check";

const checkMarkSvg = asDataUrl("white");

type stepProps = {
  isActive: boolean;
  name: string;
};

export const Circle = styled.div<stepProps>`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background-color: ${({ isActive }) =>
    isActive ? "var(--color-primary)" : "white"};
  position: relative;
  border: 2px solid
    ${({ isActive }) =>
      isActive ? "var(--color-primary)" : "var(--color-gray-10)"};

  &:before {
    content: "${({ name }) => name}";
    position: absolute;
    top: -3rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: var(--font-size-xs);
    font-weight: ${({ isActive }) =>
      isActive ? "var(--font-weight-bold)" : "var(--font-weight-regular)"};
    color: ${({ isActive }) => (isActive ? "black" : "var(--color-gray-60)")};

    ${mq.sm} {
      font-size: var(--font-size-sm);
    }
  }

  &:after {
    content: "";
    background-image: url("${checkMarkSvg}");
    position: absolute;
    inset: 0;
  }
`;

export const Line = styled.hr<stepProps>`
  flex: 1;
  border-width: 0.02rem;
  border-color: ${({ isActive }) =>
    isActive ? "var(--color-primary)" : "var(--color-gray-10)"};
`;

export const StackFullWidth = styled(Stack)`
  width: 100%;
`;
