import styled from "@emotion/styled";
import { LinkArrowButton as LinkArrowButtonRaw } from "~/components/ArrowButton";
import { mq } from "~/utils/style";

export const Root = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  ${mq.md} {
    align-items: center;
    justify-content: center;
    position: relative;
  }
`;

export const Image = styled.img`
  height: 3rem;
`;

export const LinkArrowButton = styled(LinkArrowButtonRaw)`
  ${mq.md} {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;
