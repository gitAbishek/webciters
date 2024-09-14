import styled from "@emotion/styled";
import { mq } from "~/utils/style";
import { LinkButton } from "~/components/Button";

type RootProps = {
  imageUrl?: string;
  size:
    | "hero-banner-content"
    | "hero-banner-content-large"
    | "hero-banner-content-medium"
    | "hero-banner-content-small";
};

const sizesMobile = {
  "hero-banner-content": "30rem",
  "hero-banner-content-large": "30rem",
  "hero-banner-content-medium": "25rem",
  "hero-banner-content-small": "25rem",
};

const sizesDesktop = {
  "hero-banner-content": "52rem",
  "hero-banner-content-large": "52rem",
  "hero-banner-content-medium": "35rem",
  "hero-banner-content-small": "25rem",
};

export const Wrapper = styled.div<RootProps>`
  background: ${({ imageUrl }: RootProps) =>
    imageUrl ? `center url(${imageUrl})` : "var(--color-gray-04)"};
  background-size: cover;
  margin: 0 auto;
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: ${({ size }) => size && sizesMobile[size]};
  text-align: center;
  color: var(--color-white);

  ${mq.lg} {
    min-height: ${({ size }) => size && sizesDesktop[size]};
    justify-content: center;
  }
`;

export const LinkButtonWithMargin = styled(LinkButton)`
  margin-top: var(--space-5);
`;
