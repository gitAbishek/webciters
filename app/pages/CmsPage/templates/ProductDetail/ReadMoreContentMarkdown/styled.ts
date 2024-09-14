import styled from "@emotion/styled";
import { Text as TextBase } from "~/components/Typography";

export const TextWithinButton = styled(TextBase)`
  margin-left: var(--space-2);
`;

export const MardownWrapper = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-bottom: var(--space-2);
  }
`;
