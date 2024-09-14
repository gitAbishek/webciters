import styled from "@emotion/styled";

export const Root = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-top: 0;
  }

  padding: var(--space-4) 0;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: var(--space-2);
  justify-content: space-between;
`;

export const Img = styled.img`
  height: 2.4rem;
`;
