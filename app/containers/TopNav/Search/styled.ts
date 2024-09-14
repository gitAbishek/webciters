import styled from "@emotion/styled";
import { Container } from "~/components/Container";
import { mq } from "~/utils/style";

export const Root = styled(Container)`
  position: relative;
  z-index: var(--z-index-search-overlay);
`;

export const SearchInput = styled.input`
  flex: 1;
  background: none;
  outline: none;
  margin-left: var(--space-2);
`;

export const SearchWrapper = styled.label`
  background: var(--color-gray-04);
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  height: 4rem;
  position: relative;
  padding: 0 var(--space-2);

  &:focus-within {
    outline: 1px solid var(--color-gray-50);
  }

  ${mq.md} {
    height: 4.6rem;
  }
`;
