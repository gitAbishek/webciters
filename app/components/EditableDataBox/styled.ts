import styled from "@emotion/styled";
import { Link } from "~/components/Link";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Data = styled.div`
  border: 0.1rem solid var(--color-gray-13);
  padding: var(--space-6);
  flex: 1;
`;

export const LinkWrapper = styled(Data)`
  flex: 0;
  border-top: 0;
  padding-top: var(--space-4);
  padding-bottom: var(--space-4);
  display: flex;
  justify-content: space-between;
`;

export const BottomLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: var(--space-1);
  color: var(--color-primary);
`;

export const RemoveAction = styled.button`
  display: flex;
  gap: var(--space-1);
  color: var(--color-primary);
`;
