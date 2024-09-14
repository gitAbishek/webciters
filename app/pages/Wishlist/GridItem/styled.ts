import styled from "@emotion/styled";
import { ListerProductCard as ListerProductCardBase } from "~/components/ListerProductCard";

type ListerProductCardProps = {
  isDeleting: boolean;
};

export const ListerProductCard = styled(
  ListerProductCardBase
)<ListerProductCardProps>`
  transition: 0.2s ease opacity;
  opacity: ${({ isDeleting }) => isDeleting && "0.3"};
`;
