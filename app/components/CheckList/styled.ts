import styled from "@emotion/styled";
import { asDataUrl } from "~/components/Icon/Check";

const checkMarkSvg = asDataUrl("#018644");

export const Root = styled.ul`
  list-style: none;
`;

export const Li = styled.li`
  &:before {
    content: "";
    display: inline-block;
    height: 1.5rem;
    width: 1.5rem;
    margin-right: var(--space-2);
    background-image: url("${checkMarkSvg}");
    vertical-align: text-bottom;
  }
`;
