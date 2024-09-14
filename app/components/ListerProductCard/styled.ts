import styled from "@emotion/styled";
import { Link } from "@remix-run/react";
import { mq } from "~/utils/style";
import { Text } from "~/components/Typography";

export const Root = styled.div`
  position: relative;
  padding: var(--space-6) 0;
  border-top: 0.1rem solid var(--color-gray-13);

  ${mq.md} {
    border: none;
    padding: 0;
  }
`;

export const StretchedLink = styled(Link)`
  position: absolute;
  inset: 0;
  z-index: 1;
`;

export const Img = styled.img`
  width: 100%;
`;

export const ActionWrapper = styled.div`
  position: absolute;
  right: 0;
  z-index: 1;

  ${mq.md} {
    right: var(--space-1);
    top: var(--space-1);
  }
`;

export const Content = styled.div`
  display: grid;
  gap: var(--space-4);
  grid-template-columns: 10rem minmax(0, 1fr);

  ${mq.md} {
    display: block;
  }
`;

export const BrandText = styled(Text)`
  padding-right: var(--space-6);
  margin-bottom: var(--space-1);
  min-height: 1.9rem;
`;

export const TextEllipses = styled(Text)`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
`;
