import styled from "@emotion/styled";
import { mq } from "~/utils/style";

export const Root = styled.div`
  display: none;

  ${mq.md} {
    min-width: 22rem;
    width: 22rem;
    display: block;
  }
`;
