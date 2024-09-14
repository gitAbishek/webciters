import styled from "@emotion/styled";
import { mq } from "~/utils/style";
import { Text } from "~/components/Typography";

export const Root = styled.div`
  flex: 0 0 85%;
  display: flex;
  flex-direction: column;

  ${mq.sm} {
    flex: 0 0 38%;
  }

  ${mq.md} {
    flex: 0 0 28%;
  }

  ${mq.lg} {
    flex: 0 0 33.333%;
  }
`;

export const Wrapper = styled.div`
  background-color: white;
  padding: var(--space-4);
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Description = styled(Text)`
  padding-bottom: var(--space-4);
  margin-bottom: auto;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: var(--space-2);
  margin-bottom: var(--space-4);
`;

export const Date = styled(Text)`
  font-style: italic;
`;
