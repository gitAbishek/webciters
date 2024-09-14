import styled from "@emotion/styled";
import { AccessibleButton } from "~/components/AccessibleButton";
import { variants } from "~/components/Typography";
import { Colors, noPropsForwarding } from "~/utils/style";

type MainProps = {
  color: Colors;
};

export const Main = styled("div", noPropsForwarding)<MainProps>`
  padding: var(--space-3) var(--space-4);
  background-color: white;
  display: flex;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
  border-bottom: 0.8rem solid var(--color-${({ color }) => color});
  align-items: flex-start;
  max-width: 35rem;
  font: ${variants.sm};
  gap: var(--space-3);
  pointer-events: auto;
`;

export const Content = styled.div`
  flex: 1;
`;

export const CloseBtn = styled(AccessibleButton)`
  margin-top: -0.2rem;
`;
