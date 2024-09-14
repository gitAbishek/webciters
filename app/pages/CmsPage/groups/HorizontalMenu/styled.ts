import styled from "@emotion/styled";
import { Container } from "~/components/Container";
import { Link } from "~/components/Link";

export const FlexContainer = styled(Container)`
  display: flex;
  gap: var(--space-4);
  justify-content: center;
  flex-wrap: wrap;
`;

export const NoMargin = styled.div`
  * {
    margin: 0;
  }
`;

export const LinkNormal = styled(Link)`
  font-weight: inherit;
`;
