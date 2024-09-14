import styled from "@emotion/styled";
import { Link } from "~/components/Link";
import { mq } from "~/utils/style";
import { variants } from "~/components/Typography";

export const Item = styled(Link)`
  flex: 0 0 45%;
  text-align: center;
  margin: auto;

  ${mq.sm} {
    flex: 0 0 22%;
  }

  ${mq.md} {
    flex: 0 0 18%;
  }

  ${mq.xl} {
    flex: 0 0 12.5%;
  }
`;

export const Img = styled.img`
  object-fit: cover;
  object-position: center;
  margin-bottom: var(--space-2);
  aspect-ratio: 1;
  width: 100%;
`;

export const Label = styled.span`
  text-decoration: none;
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);
`;

export const SeeMoreContent = styled.div`
  background-color: var(--color-secondary);
  display: flex;
  align-items: flex-end;
  font: ${variants.lg};
  color: white;
  padding: var(--space-4);
`;
