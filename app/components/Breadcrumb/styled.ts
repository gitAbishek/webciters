import styled from "@emotion/styled";
import { Link as LinkBase } from "@remix-run/react";
import { mq } from "~/utils/style";

export const Root = styled.div`
  display: flex;
  font-size: var(--font-size-sm);
  align-items: center;
  color: var(--color-gray-60);
  gap: var(--space-1);
  overflow: auto;
  padding-bottom: var(--space-2);

  ${mq.md} {
    margin-top: var(--space-3);
  }
`;

export const BackLink = styled(LinkBase)`
  display: flex;
  color: black;
  align-items: center;
  font-weight: var(--font-weight-medium);
`;

export const Link = styled(LinkBase)`
  flex-shrink: 0;
`;
