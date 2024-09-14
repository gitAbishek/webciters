import {
  CloseButton,
  ContentWrapper,
  Image,
  PopupWrapper,
  PopupOverlay,
} from "~/components/ImageViewer/styled";
import { CloseIcon } from "~/components/Icon";

type Props = {
  src: string;
  setIsActiveImageViewer: () => void;
};

export function ImageViewer({ src, setIsActiveImageViewer }: Props) {
  return (
    <PopupWrapper>
      <PopupOverlay onClick={setIsActiveImageViewer} />
      <ContentWrapper>
        <CloseButton
          type="button"
          variant="primary"
          size="sm"
          onClick={setIsActiveImageViewer}
        >
          <CloseIcon size="md" color="white" />
        </CloseButton>
        <Image src={src} />
      </ContentWrapper>
    </PopupWrapper>
  );
}
