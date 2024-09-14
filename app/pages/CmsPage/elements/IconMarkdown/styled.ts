import styled from "@emotion/styled";
import { Size } from "~/utils/style";

type RootProps = {
  gap?: Size;
};

export const Item = styled.div<RootProps>`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap && `var(--space-${gap})`};
`;

type imageProps = {
  smallerIcon: boolean;
};

export const Img = styled.img<imageProps>`
  display: block;
  width: ${({ smallerIcon }) => (smallerIcon ? "1.6rem" : "2rem")};
  // The markdown content wraps lines in a paragraph, markdown paragraphs always have default margin
  // Giving the same margin to the element is the easiest fix
  margin-bottom: var(--space-2);
`;
