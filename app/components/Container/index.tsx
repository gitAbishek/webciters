import styled from "@emotion/styled";
import { containerPadding } from "~/utils/style";

export const Container = styled.div`
  ${containerPadding};
  max-width: var(--max-width);
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;
