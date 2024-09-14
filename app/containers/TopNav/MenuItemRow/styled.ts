import styled from "@emotion/styled";
import { Link } from "@remix-run/react";
import { css } from "@emotion/react";
import { mq } from "~/utils/style";
import { variants } from "~/components/Typography";

type Props = {
  isBold: boolean;
  isMoreSpacing?: boolean;
};

const baseStyle = css`
  font: ${variants.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4);
  width: 100%;
  border-radius: var(--border-radius);

  ${mq.md} {
    padding: var(--space-3) var(--space-4);
  }
`;

export const AsButton = styled("button", {
  shouldForwardProp: (props) => props !== "isBold" && props !== "isMoreSpacing",
})<Props>`
  ${baseStyle};

  font-weight: ${({ isBold }) => isBold && "var(--font-weight-semi-bold)"};

  ${mq.md} {
    transition: background-color 0.2s ease;
    padding: ${({ isMoreSpacing }) =>
      isMoreSpacing
        ? "var(--space-1) var(--space-4)"
        : "var(--space-3) var(--space-4)"};

    &:hover {
      background: var(--color-gray-04);
    }
  }
`;

export const AsLink = styled(Link, {
  shouldForwardProp: (props) => props !== "isBold" && props !== "isMoreSpacing",
})<Props>`
  ${baseStyle};

  font-weight: ${({ isBold }) => isBold && "var(--font-weight-semi-bold)"};

  ${mq.md} {
    padding: ${({ isMoreSpacing }) =>
      isMoreSpacing
        ? "var(--space-1) var(--space-4)"
        : "var(--space-3) var(--space-4)"};

    &:hover {
      text-decoration: underline;
    }
  }
`;
