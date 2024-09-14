import { ReactNode } from "react";
import { useField } from "remix-validated-form";
import {
  Icon,
  Input,
  Circle,
  CollapseWrapper,
  Label,
  HeadWrapper,
} from "./styled";
import { Stack } from "~/components/Stack";
import { Text } from "~/components/Typography";

export type Props = {
  label: string;
  name: string;
  value: string;
  children: ReactNode;
  image?: string;
  imageAlt?: string;
};

export function RadioCollapse({
  label,
  value,
  children,
  image,
  name,
  imageAlt,
}: Props) {
  const { getInputProps, defaultValue } = useField(name);

  return (
    <Label>
      <Input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultValue === value}
        {...getInputProps}
      />
      <HeadWrapper className="head-wrapper">
        <Stack gap={4} direction="column">
          <Stack gap={2} justify="space-between">
            <Stack gap={2} align="center" justify="flex-start">
              <Circle className="circle" />
              <Text variant="sm" weight="semi-bold">
                {label}
              </Text>
            </Stack>
            {image && <Icon src={image} alt={imageAlt} />}
          </Stack>
          <CollapseWrapper className="collapse-wrapper">
            {children}
          </CollapseWrapper>
        </Stack>
      </HeadWrapper>
    </Label>
  );
}
