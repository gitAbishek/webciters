import styled from "@emotion/styled";
import { asDataUrl } from "~/components/Icon/Check";

const checkWhiteSvg = asDataUrl("white");

export const Field = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  cursor: pointer;
  align-items: center;
`;

export const Checkmark = styled.div`
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  border: 0.5px solid black;
  border-radius: var(--border-radius);
  margin-right: var(--space-2);
`;

export const Input = styled.input`
  &:checked ~ div {
    border-color: var(--color-primary);

    &:after {
      background-color: var(--color-primary);
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background-image: url("${checkWhiteSvg}");
      background-size: contain;
      background-position: center;
    }
  }

  &[disabled] ~ div {
    opacity: 0.2;
  }
`;
