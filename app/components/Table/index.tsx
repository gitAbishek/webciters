import styled from "@emotion/styled";

export const Table = styled.table`
  tr {
    border-radius: var(--border-radius);

    &:nth-of-type(even) {
      background-color: var(--color-gray-04);
    }

    th {
      background-color: var(--color-gray-10);
    }

    td,
    th {
      padding: var(--space-2) var(--space-4);
      text-align: left;
    }
  }
`;
