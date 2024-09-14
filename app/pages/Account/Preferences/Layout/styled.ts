import styled from "@emotion/styled";
import { mq } from "~/utils/style";

export const Root = styled.div`
  display: flex;
  gap: 10rem;
`;

export const Content = styled.div`
  flex: 1;
`;

export const Nav = styled.aside`
  display: none;

  ${mq.md} {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }
`;
