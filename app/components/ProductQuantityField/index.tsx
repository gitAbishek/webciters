import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { Root, Field, Button } from "./styled";
import { Stack } from "~/components/Stack";

type Props = {
  name: string;
  className?: string;
  onBlur?: (value: number) => void;
  newValue: number;
  disabled?: boolean;
  inStock: number;
};

export function ProductQuantityField({
  className,
  name,
  newValue,
  onBlur,
  disabled,
  inStock,
}: Props) {
  const [value, setValue] = useState<string | number>(newValue);
  const ref = useRef<HTMLInputElement>(null);

  // Since this component has a networks state value that is updated out of this scope we keep an inner copy
  useEffect(() => {
    setValue(newValue);
  }, [newValue, setValue]);

  return (
    <Stack align="center">
      <Button type="button" onClick={() => decrement()}>
        -
      </Button>
      <Root className={className} isDisabled={disabled}>
        <Field
          ref={ref}
          value={`${value}`}
          onChange={handleChange}
          type="number"
          min={1}
          max={inStock}
          name={name}
          onBlur={handleBlur}
          onKeyUp={handleKeyUp}
          disabled={disabled}
        />
      </Root>
      <Button type="button" onClick={() => increment()}>
        +
      </Button>
    </Stack>
  );

  function handleKeyUp(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      ref.current?.blur();
    }
  }

  function handleBlur() {
    const asNumber = Number(value);

    if (asNumber < 1) {
      setValue(1);
    }

    if (asNumber > inStock) {
      toast.error(`Er zijn nog maar ${inStock} op voorraad.`, {
        duration: 2500,
        position: "top-center",
      });
      setValue(`${inStock}`);
      return;
    }

    if (onBlur) onBlur(asNumber < 1 ? 1 : Number(value));
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value: currentValue } = e.target;

    if (currentValue === "") {
      setValue("");
      return;
    }

    const asNumber = Number(currentValue);

    if (inStock && asNumber > inStock) {
      toast.error(`Er zijn nog maar ${inStock} op voorraad.`, {
        duration: 2500,
        position: "top-center",
      });
      setValue(`${inStock}`);
      return;
    }

    setValue(asNumber);
  }

  function increment() {
    const asNumber = ref.current?.value;

    if (asNumber) {
      const numberIncremented = Number(asNumber) + 1;

      if (numberIncremented > inStock) {
        toast.error(`Er zijn nog maar ${inStock} op voorraad.`, {
          duration: 2500,
          position: "top-center",
        });

        if (onBlur) {
          onBlur(inStock);
        } else {
          setValue(inStock);
        }

        return null;
      }

      if (onBlur) {
        onBlur(numberIncremented);
      } else {
        setValue(numberIncremented);
      }
    }

    return null;
  }

  function decrement() {
    const asNumber = ref.current?.value;
    if (asNumber) {
      const numberDecremented = Number(asNumber) - 1;
      if (onBlur) {
        onBlur(numberDecremented < 1 ? 1 : numberDecremented);
      } else {
        setValue(numberDecremented < 1 ? 1 : numberDecremented);
      }
    }

    return null;
  }
}
