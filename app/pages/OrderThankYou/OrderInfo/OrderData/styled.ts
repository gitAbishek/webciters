import styled from "@emotion/styled";
import { mq } from "~/utils/style";

export const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);

  ${mq.md} {
    flex-direction: row;
    justify-content: space-between;
    gap: var(--space-4);
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  gap: var(--space-6);

  ${mq.md} {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-4);
  }
`;
