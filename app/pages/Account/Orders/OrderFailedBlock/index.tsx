import { useState } from "react";
import { useSearchParams } from "@remix-run/react";
import { OrderFailedWrapper, Button } from "./styled";
import { Text } from "~/components/Typography";
import { CloseIcon } from "~/components/Icon";

export function OrderFailedBlock() {
  const [parameter] = useSearchParams();
  const [isActive, setIsActive] = useState(
    parameter.get("success") === "false"
  );

  if (!isActive) return null;

  return (
    <OrderFailedWrapper>
      <Text weight="semi-bold">
        We hebben nog geen bevestiging van de betaling ontvangen. Dit kan komen
        doordat de bevestiging van de bank iets langer duurt. Controleer de
        bestelling voor de meest actuele status.
      </Text>
      <Button type="button" onClick={() => setIsActive(false)}>
        <CloseIcon size="sm" />
      </Button>
    </OrderFailedWrapper>
  );
}
