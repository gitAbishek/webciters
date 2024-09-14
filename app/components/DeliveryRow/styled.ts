import styled from "@emotion/styled";
import { Text } from "~/components/Typography";

export const Root = styled.div`
  overflow: hidden;
  max-width: 100%;
`;

export const EllipsesText = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
