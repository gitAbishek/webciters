import styled from "@emotion/styled";
import { mq } from "~/utils/style";

export const AddressesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);

  ${mq.lg} {
    flex-direction: row;
    justify-content: space-between;
  }
`;
