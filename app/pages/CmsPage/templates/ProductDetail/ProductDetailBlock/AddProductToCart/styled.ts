import styled from "@emotion/styled";
import { SubmitBtn } from "~/components/Form/SubmitBtn";
import { Text } from "~/components/Typography";
import { mq } from "~/utils/style";

export const Button = styled(SubmitBtn)`
  color: white;
  display: flex;
  flex: 1;
  justify-content: center;
`;
export const AmountAndButtonWrapper = styled.div`
  display: flex;
`;
export const ErrorText = styled(Text)`
  position: relative;
  top: -0.15rem;

  ${mq.lg} {
    max-width: 380px;
  }
`;
