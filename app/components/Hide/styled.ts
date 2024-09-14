import styled from "@emotion/styled";
import { mq, mqReverse, noPropsForwarding } from "~/utils/style";

type RootProps = {
  minWidth?: keyof typeof mq;
  maxWidth?: keyof typeof mqReverse;
};

export const HideBox = styled("div", noPropsForwarding)<RootProps>`
  ${({ minWidth }) => minWidth && mq[minWidth]} {
    display: none;
  }
  ${({ maxWidth }) => maxWidth && mqReverse[maxWidth]} {
    display: none;
  }
`;
