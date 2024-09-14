import styled from "@emotion/styled";
import { Text } from "~/components/Typography";
import { mq } from "~/utils/style";

export const Button = styled.button`
  text-decoration: underline;
  color: black;
  font-weight: var(--font-weight-semi-bold);
`;

export const RemoveButton = styled.button`
  padding: 0;
`;

export const TextEllipses = styled(Text)`
  ${mq.lg} {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 12rem;
    width: 100%;
  }
`;
