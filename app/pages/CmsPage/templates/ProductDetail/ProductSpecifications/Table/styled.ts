import styled from "@emotion/styled";

export const TableElement = styled.table`
  width: 100%;

  tr {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-2) var(--space-4);
    border-radius: var(--border-radius);

    &:nth-of-type(odd) {
      background-color: var(--color-gray-04);
    }

    td {
      &:first-of-type {
        margin-right: 5rem;
      }

      &:last-of-type {
        text-align: right;
      }
    }
  }
`;
