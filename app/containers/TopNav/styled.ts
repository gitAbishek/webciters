import styled from "@emotion/styled";
import { Link } from "@remix-run/react";
import { mq } from "~/utils/style";
import { AccessibleButton } from "~/components/AccessibleButton";
import { Container } from "~/components/Container";
import { Stack } from "~/components/Stack";
import { Search } from "./Search";
import { variants } from "~/components/Typography";
import { asDataUrl } from "~/components/Icon/Check";

const checkWhiteSvg = asDataUrl("white");

export const Nav = styled.nav`
  background: var(--color-white);
  padding-bottom: var(--space-3);
  padding-top: var(--space-3);
  z-index: var(--z-index-menu);
  position: relative;

  ${mq.md} {
    padding-bottom: 0;
  }
`;

export const Main = styled(Container)`
  display: flex;
  align-content: center;

  ${mq.md} {
    margin-bottom: var(--space-3);
  }
`;

export const OpenMenuButton = styled(AccessibleButton)`
  margin-right: var(--space-3);

  ${mq.md} {
    display: none;
  }
`;

export const LogoWrapper = styled(Link)`
  ${mq.md} {
    width: 40%;
    display: flex;
    align-items: center;
  }
`;

export const IconWrapper = styled(Stack)`
  margin-left: auto;

  ${mq.md} {
    width: 40%;
    justify-content: flex-end;
    align-items: center;
  }
`;

type CartLinkProps = {
  count?: number | string;
};

const LinkWithIndicator = styled(Link)`
  position: relative;

  &:before {
    font: ${variants.xs};
    font-weight: var(--font-weight-semi-bold);
    position: absolute;
    right: -0.5rem;
    top: -0.5rem;
    border-radius: 0.8rem;
    height: 1.6rem;
    line-height: 1.6rem;
    text-align: center;
    min-width: 1.6rem;
    padding: 0 0.5rem;
  }
`;

export const LinkWithCheckmark = styled(LinkWithIndicator)`
  &:before {
    content: "";
    background: var(--color-green) url("${checkWhiteSvg}");
  }
`;

export const LinkWithCount = styled(LinkWithIndicator)<CartLinkProps>`
  position: relative;

  &:before {
    content: ${({ count }) => count && `"${count}"`};
    color: white;
    background: var(--color-primary);
  }
`;

export const SearchDesktop = styled(Search)`
  display: none;

  ${mq.md} {
    display: block;
  }
`;

export const SearchMobile = styled(Search)`
  margin-top: var(--space-2);

  ${mq.md} {
    display: none;
  }
`;
