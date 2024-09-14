import { useSelect, UseSelectStateChange } from "downshift";
import { Button, Img, ImgTextWrapper, Li, SelectWrapper, Ul } from "./styled";
import { ChevronDownIcon } from "~/components/Icon";
import { Text } from "~/components/Typography";
import { Colors } from "~/utils/style";
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
  backgroundColor?: Colors;
  borderColor?: Colors;
  fullWidth?: boolean;
  isTextWithLineBreak?: boolean;
  name?: string;
};

export function SelectForm({
  label,
  options,
  selectedItem,
  onSelectedItemChange,
  backgroundColor,
  borderColor,
  name,
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
      {name && <input name={name} value={currentSelectedItem?.value} hidden />}
      <Button
        borderColor={borderColor}
        backgroundColor={backgroundColor}
        type="button"
        {...getToggleButtonProps()}
      >
        <ImgTextWrapper>
          {currentSelectedItem ? (
            <>
              {currentSelectedItem.image && (
                <Img
                  alt={currentSelectedItem.imageAlt}
                  src={currentSelectedItem.image}
                />
              )}
              <Stack direction="column" gap={1} align="flex-start">
                <Text variant="xs">
                  <strong>{label && `${label}:`}</strong>{" "}
                </Text>
                <Text variant="sm">{currentSelectedItem?.name}</Text>
              </Stack>
            </>
          ) : (
            <Text variant="sm">
              <strong>{label && `${label}:`}</strong> Nog niets geselecteerd
            </Text>
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
