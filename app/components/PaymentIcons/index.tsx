import { PaymentIcon } from "./styled";

import { Stack } from "~/components/Stack";
import { usePaymentMethods } from "~/containers/PaymentMethods/hooks";

type Icon = {
  image: string;
  image_alt_text: string;
};

type Props = {
  including?: Icon[];
};

export function PaymentIcons({ including = [] }: Props) {
  const paymentMethods = usePaymentMethods();

  return (
    <Stack gap={2} justify="space-evenly" wrap>
      {[...paymentMethods, ...including].map((paymentMethod) => (
        <PaymentIcon
          key={paymentMethod.image}
          src={paymentMethod.image}
          alt={paymentMethod.image_alt_text}
        />
      ))}
    </Stack>
  );
}
