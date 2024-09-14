import styled from "@emotion/styled";
import { Link } from "~/components/Link";

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-4) 0;
`;

export const MenuLink = styled(Link)`
  font-weight: inherit;
  margin-top: var(--space-1);
`;
