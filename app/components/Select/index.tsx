import { useSelect, UseSelectStateChange } from "downshift";
import {
  Button,
  Img,
  ImgTextWrapper,
  Li,
  SelectWrapper,
  Ul,
} from "~/components/Select/styled";
import { ChevronDownIcon } from "~/components/Icon";
import { Text } from "~/components/Typography";
import { Stack } from "~/components/Stack";

export type Option = {
  name: string;
  value: string;
  image?: string;
  imageAlt?: string;
};

type Props = {
  label: string;
  options: Option[];
  selectedItem: Option | null;
  onSelectedItemChange: (data: UseSelectStateChange<Option>) => void;
};

export function Select({
  label,
  options,
  selectedItem,
  onSelectedItemChange,
}: Props) {
  const {
    isOpen,
    selectedItem: currentSelectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items: options,
    selectedItem,
    onSelectedItemChange,
  });
  return (
    <SelectWrapper>
      <Button type="button" {...getToggleButtonProps()}>
        <ImgTextWrapper>
          {currentSelectedItem ? (
            <>
              {currentSelectedItem.image && (
                <Img
                  alt={currentSelectedItem.imageAlt}
                  src={currentSelectedItem.image}
                />
              )}
              <Stack direction="column" align="flex-start">
                <Text variant="sm" weight="semi-bold">
                  <strong>{label && `${label}:`}</strong>
                </Text>
                <Text variant="sm">{currentSelectedItem?.name}</Text>
              </Stack>
            </>
          ) : (
            <Stack direction="column" align="flex-start">
              <Text variant="sm" weight="semi-bold">
                <strong>{label && `${label}:`}</strong>
              </Text>
              <Text variant="sm"> Nog niets geselecteerd</Text>
            </Stack>
          )}
        </ImgTextWrapper>
        <ChevronDownIcon />
      </Button>
      <Ul isOpen={isOpen} {...getMenuProps()}>
        {isOpen &&
          options.map((item, index) => (
            <Li
              isHighlighted={index === highlightedIndex}
              key={`${item.name}${item.value}`}
              {...getItemProps({ item, index })}
            >
              {item.image && (
                <Img src={`${item.image}`} alt={`${item.imageAlt}`} />
              )}
              {item.name}
            </Li>
          ))}
      </Ul>
    </SelectWrapper>
  );
}
