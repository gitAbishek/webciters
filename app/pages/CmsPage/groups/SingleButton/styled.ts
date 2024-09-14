import styled from "@emotion/styled";
import { Stack } from "~/components/Stack";
import { mq } from "~/utils/style";

export const StackWrapper = styled(Stack)`
  flex-direction: column;

  ${mq.md} {
    flex-direction: row;
  }
`;
