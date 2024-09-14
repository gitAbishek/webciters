import styled from "@emotion/styled";
import { asDataUrl } from "~/components/Icon/Check";
import { SubmitBtn as SubmitBtnRaw } from "~/components/Form/SubmitBtn";

const checkWhiteSvg = asDataUrl("white");

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
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
  position: absolute;
  opacity: 0;

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
`;

export const SubmitBtn = styled(SubmitBtnRaw)`
  margin-top: var(--space-6);
`;
