import styled from "@emotion/styled";
import { Link as LinkBase } from "~/components/Link";
import { mq } from "~/utils/style";

export const Item = styled.div`
  flex: 0 0 80%;
  box-sizing: content-box;

  &:first-of-type {
    padding-left: var(--space-2);
  }

  &:last-of-type {
    padding-right: var(--space-2);
  }

  ${mq.sm} {
    flex: 0 0 40%;
  }

  ${mq.md} {
    flex: 0 0 30%;
  }

  ${mq.xl} {
    flex: 0 0 20%;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const Link = styled(LinkBase)`
  margin-top: var(--space-4);
  margin-bottom: var(--space-5);
  display: block;
`;
