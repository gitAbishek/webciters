import styled from "@emotion/styled";
import { Colors, mq } from "~/utils/style";
import { Link as LinkBase } from "../../../../components/Link";

type RootProps = {
  backgroundImage?: string;
  color?: Colors;
};

export const Root = styled.div`
  flex: 0 0 80%;

  ${mq.md} {
    flex: 1;
    min-width: 44%;
  }

  ${mq.lg} {
    min-width: 33.333%;
  }
`;

export const Item = styled.div<RootProps>`
  background: center ${({ backgroundImage }) =>
    backgroundImage && `url(${backgroundImage}`});
  background-size: cover;
  height: 20rem;
  flex: 0 0 80%;
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${({ color }) => color && `var(--color-${color}`});

  ${mq.md} {
    height: 26rem;
  }
`;

export const Link = styled(LinkBase)`
  margin-top: var(--space-3);
`;

export const CustomWrapper = styled.div<RootProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: -0.2rem;

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    background-color: ${({ color }) =>
      color === "black" && `var(--color-black)`};
    color: ${({ color }) => color === "black" && `var(--color-white)`};
    padding: 0.2rem 0.4rem;
  }
`;
