import styled from "@emotion/styled";
import { mq } from "~/utils/style";
import { Container } from "~/components/Container";

export const Root = styled.div`
  background: #fff;
  border-top: 2px solid var(--color-gray-04);
  border-bottom: 2px solid var(--color-gray-04);

  display: none;

  ${mq.md} {
    display: block;
  }
`;

export const ContainerWithoutPadding = styled.div`
  max-width: var(--max-width);
  width: 100%;
  margin: 0 auto;
  display: flex;
`;

export const SubmenuWrapper = styled.div`
  position: absolute;
  margin-top: 0.2rem;
  left: 0;
  right: 0;
  background: var(--color-white);
  z-index: 1;
  padding-bottom: var(--space-5);
  border-bottom: 2px solid var(--color-gray-04);
`;

export const SubmenuContainer = styled(Container)`
  display: flex;
`;

export const MenuWrapper = styled.div`
  &:last-of-type {
    margin-left: auto;
  }
`;
