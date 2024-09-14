import styled from "@emotion/styled";
import { Link as LinkRaw } from "~/components/Link";

type LinkProps = {
  isActive?: boolean;
};
export const Link = styled(LinkRaw)<LinkProps>`
  background-color: #f6f6f6;
  border: ${({ isActive }) => isActive && "0.1rem solid var(--color-black)"};
  color: ${({ isActive }) =>
    isActive ? "var(--color-black)" : "rgba(0, 0, 0, 0.6)"};
  font-weight: ${({ isActive }) => isActive && "var(--font-weight-bold)"};
  padding: var(--space-3);
  white-space: nowrap;
  height: 43px;
  margin-right: var(--space-3);
  margin-bottom: var(--space-3);
  display: inline-block;
`;

type ReadMoreProps = {
  isReadMoreMobile: boolean;
  isReadMoreDesktop: boolean;
};
export const ReadMoreParent = styled.div<ReadMoreProps>`
  height: auto;

  ${({ isReadMoreMobile }) =>
    isReadMoreMobile &&
    `
     height:330px; 
  `}
  ${({ isReadMoreDesktop }) =>
    isReadMoreDesktop &&
    `
     height:43px; 
  `}
  overflow:hidden;
  position: relative;
  width: 100%;
  background: transparent;
`;

export const Button = styled.button`
  margin-top: var(--space-3);
`;
