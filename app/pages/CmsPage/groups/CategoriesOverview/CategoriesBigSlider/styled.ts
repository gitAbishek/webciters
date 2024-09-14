import styled from "@emotion/styled";
import { variants } from "~/components/Typography";
import { Link } from "~/components/Link";
import { mq } from "~/utils/style";

type ContentProps = {
  backgroundImage: string;
};

export const Item = styled.div`
  --space: var(--space-4);

  flex: 0 0 80%;
  padding-top: var(--space-2);
  padding-bottom: var(--space-2);

  ${mq.md} {
    flex: 0 0 44%;
    --space: var(--space-6);
  }

  ${mq.xl} {
    flex: 0 0 25%;
  }
`;

export const Content = styled(Link)<ContentProps>`
  background: ${({ backgroundImage }) => `url(${backgroundImage}`});
  background-size: cover;
  padding: var(--space);
  cursor: pointer;
  position: relative;
  height: 27rem;
  display: flex;
  align-items: flex-end;
  overflow: hidden;

  ${mq.md} {
    height: 33rem;
  }

  &:before {
    content: "";
    position: absolute;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), black);
    height: 6.6rem;
    bottom: -1.3rem;
    left: 0;
    right: 0;
  }
`;

export const SeeMoreContent = styled(Link)`
  background-color: var(--color-secondary);
  height: 100%;
  display: flex;
  padding: var(--space);
  align-items: flex-end;
`;

export const Label = styled.span`
  text-decoration: none;
  font: ${variants.lg};
  color: var(--color-white);
  position: relative;
`;
