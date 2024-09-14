import styled from "@emotion/styled";
import { variants } from "~/components/Typography";
import { Container } from "~/components/Container";
import { Link } from "~/components/Link";
import { mq } from "~/utils/style";

export const Root = styled.div`
  margin-top: var(--space-8);
`;

export const BrandImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const BrandHolder = styled(Link)`
  background: var(--color-gray-04);
  height: 100%;
  width: 100%;
  display: flex;
  padding: var(--space-6);
`;

export const Item = styled.div`
  flex-shrink: 0;
  width: calc(50% - var(--space-3));
  min-height: 10rem;

  ${mq.md} {
    min-height: 15rem;
    width: calc(25% - var(--space-3));
  }
`;

export const SeeMoreContent = styled(BrandHolder)`
  background-color: var(--color-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  font: ${variants.md};
  font-weight: var(--font-weight-bold);
  color: white;

  ${mq.sm} {
    font: ${variants.lg};
  }
`;

export const ContainerWithMb = styled(Container)`
  margin-bottom: var(--space-4);
`;
