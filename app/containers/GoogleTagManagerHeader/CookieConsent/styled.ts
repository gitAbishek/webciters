import styled from "@emotion/styled";
import { Button } from "~/components/Button";
import { mq } from "~/utils/style";

export const MainGrid = styled.div`
  display: grid;
  gap: var(--space-6);

  ${mq.lg} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);

  ${mq.lg} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const FormButton = styled(Button)`
  grid-column: span 2;
`;
