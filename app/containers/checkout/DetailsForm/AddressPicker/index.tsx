import { AddressWrapper, Circle, Input, Root } from "./styled";
import { Stack } from "~/components/Stack";
import { Text } from "~/components/Typography";
import { CheckIcon } from "~/components/Icon";
import { AddressWithDefault } from "~/schema/address";
import { AccountAddressList } from "~/components/AccountAddressList";

type Props = {
  isInPopup?: boolean;
  address: AddressWithDefault;
  name: string;
  onChange: (v: string) => void;
  value?: string;
};

/* eslint-disable @typescript-eslint/no-explicit-any */

export function AddressPicker({
  address,
  isInPopup,
  name,
  onChange,
  value,
}: Props) {
  return (
    <Root isInPopup={isInPopup}>
      <Input
        hidden
        type="radio"
        name={name}
        value={address.guid}
        onChange={() => onChange(address.guid)}
        checked={value === address.guid}
      />
      <AddressWrapper className="addressWrapper">
        <Stack gap={3} align="flex-start">
          <Circle className="circle" />
          <Stack direction="column" gap={4}>
            <div>
              <Text weight="semi-bold" mb={1}>
                Op adres:
              </Text>
              <AccountAddressList address={address} />
            </div>
            <Stack direction="column">
              {address.default_delivery_address && isInPopup && (
                <Stack gap={2} align="center">
                  <CheckIcon size="sm" color="green" />
                  <Text variant="sm">Standaard leveringsadres</Text>
                </Stack>
              )}
              {address.default_billing_address && isInPopup && (
                <Stack gap={2} align="center">
                  <CheckIcon size="sm" color="green" />
                  <Text variant="sm">Standaard factuuradres</Text>
                </Stack>
              )}
            </Stack>
          </Stack>
        </Stack>
      </AddressWrapper>
    </Root>
  );
}
