import styled from "@emotion/styled";
import { variants } from "~/components/Typography";
import { Container } from "~/components/Container";
import { Link } from "~/components/Link";

export const BrandImg = styled.img`
  height: 100%;
`;

export const BrandHolder = styled(Link)`
  background: var(--color-gray-04);
  padding: var(--space-3);
  display: flex;
  height: 12rem;
`;

export const Item = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

export const SeeMoreContent = styled(Link)`
  background-color: var(--color-secondary);
  padding: var(--space-3);
  display: flex;
  height: 6rem;
  display: flex;
  align-items: center;
  font: ${variants.lg};
  color: white;
`;

export const ContainerWithMb = styled(Container)`
  margin-bottom: var(--space-4);
`;
