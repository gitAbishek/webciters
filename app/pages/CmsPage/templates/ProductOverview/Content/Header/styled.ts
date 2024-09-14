import styled from "@emotion/styled";
import { Stack } from "~/components/Stack";
import { Text } from "~/components/Typography";

export const Root = styled.div`
  width: 100%;
  display: table-cell;
  vertical-align: middle;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const Grid = styled.div`
  display: grid;
`;

type EllipsisProps = {
  isEllipsisActive: boolean;
};

export const EllipsisWrapper = styled(Stack)<EllipsisProps>`
  flex-direction: ${({ isEllipsisActive }) =>
    isEllipsisActive ? "row" : "column"};
`;

export const TextEllipses = styled(Text)<EllipsisProps>`
  font: var(--font-size-md) / var(--line-height-md) var(--body-font);

  ${({ isEllipsisActive }) =>
    isEllipsisActive &&
    `
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
  `}
`;

export const ReadMoreButton = styled.button`
  display: inline-flex;
  white-space: nowrap;
  width: 55px;
`;
