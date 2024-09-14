import { ReactNode } from "react";
import {
  PopupWrapper,
  InnerWrapper,
  TitleWrapper,
  PopupOverlay,
} from "./styled";
import { Heading } from "~/components/Typography";
import { AccessibleButton } from "~/components/AccessibleButton";
import { CloseIcon } from "~/components/Icon";

type Props = {
  title: string;
  children: ReactNode;
  handleClosePopup: () => void;
};

export function Popup({ children, handleClosePopup, title }: Props) {
  return (
    <PopupWrapper>
      <PopupOverlay onClick={handleClosePopup} />
      <InnerWrapper>
        <TitleWrapper gap={4} align="center" justify="space-between">
          <Heading as="h2" variant="lg" color="white">
            {title}
          </Heading>
          <AccessibleButton type="button" onClick={handleClosePopup}>
            <CloseIcon size="md" color="white" />
          </AccessibleButton>
        </TitleWrapper>
        {children}
      </InnerWrapper>
    </PopupWrapper>
  );
}
