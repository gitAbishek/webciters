import styled from "@emotion/styled";
import { Container } from "~/components/Container";
import { mq } from "~/utils/style";

export const Content = styled(Container)`
  margin-bottom: var(--space-4);
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  row-gap: var(--space-4);
  column-gap: var(--space-5);
  flex-wrap: wrap;
`;

export const Title = styled.div`
  width: 100%;

  ${mq.md} {
    width: auto;
  }
`;

export const TotalRating = styled.span`
  font-size: 3.8rem;
  font-weight: var(--font-weight-semi-bold);
  letter-spacing: 0;
`;

export const KiyohLogo = styled.img`
  height: 3.2rem;
  margin-left: auto;

  ${mq.md} {
    margin-left: 0;
  }
`;
