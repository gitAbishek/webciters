import { PopupFooterWrapper, FooterButtons } from "./styled";
import { ROUTE_CART } from "~/utils/constants";
import { Button, LinkButton } from "~/components/Button";

type Props = {
  closePopup: () => void;
};

export function PopupFooter({ closePopup }: Props) {
  return (
    <PopupFooterWrapper>
      <FooterButtons>
        <Button onClick={closePopup} variant="outline">
          Verder winkelen
        </Button>
        <LinkButton variant="secondary" to={ROUTE_CART}>
          Bekijk winkelmand
        </LinkButton>
      </FooterButtons>
    </PopupFooterWrapper>
  );
}
