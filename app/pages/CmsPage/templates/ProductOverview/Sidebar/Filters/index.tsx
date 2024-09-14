import { useState } from "react";
import { Text } from "~/components/Typography";
import { ToggleExpand } from "~/components/ToggleExpand";
import { CheckboxFormLess } from "~/components/Form/Checkbox";
import { Stack } from "~/components/Stack";
import { Button } from "~/components/Button";
import { ChevronRightIcon } from "~/components/Icon";
import { StackWrapper } from "./styled";
import { TextFieldFormless } from "~/components/Form/TextField";
import { useFilter } from "~/utils/productsOverview";
import { PossibleFilter } from "~/schema/filters";

type Props = {
  filters: PossibleFilter[];
};

export function Filters({ filters }: Props) {
  const { setPrice, setFilter, currentFilterIds, currentPriceFilter } =
    useFilter(filters);
  const hasSelectedFilters = currentFilterIds.length > 0;

  const [priceFrom, setPriceFrom] = useState(
    currentPriceFilter && currentPriceFilter.priceFrom
      ? currentPriceFilter.priceFrom
      : 0
  );
  const [priceTo, setPriceTo] = useState(
    currentPriceFilter && currentPriceFilter.priceTo
      ? currentPriceFilter.priceTo
      : 0
  );

  return (
    <Stack direction="column" gap={4} mt={hasSelectedFilters ? 5 : undefined}>
      {filters.map((filter) => (
        <>
          <ToggleExpand key={filter.id} title={filter.name} hasPadding>
            <Stack key={filter.name} direction="column" gap={3} mt={2}>
              {filter.possible_filter_values.map(({ name, id, amount }) => {
                if (amount === 0) return null;

                return (
                  <Stack key={name} gap={1} align="center">
                    <CheckboxFormLess
                      name={name}
                      label={name}
                      value={id}
                      checked={currentFilterIds.includes(`${id}`)}
                      onChange={(event) =>
                        setActiveFilters(event.target.checked, `${id}`)
                      }
                    />
                    <Text variant="sm">({amount})</Text>
                  </Stack>
                );
              })}
            </Stack>
          </ToggleExpand>
          <hr />
        </>
      ))}
      <ToggleExpand title="Prijs" hasPadding>
        <StackWrapper gap={2} mt={2} align="center">
          <TextFieldFormless
            type="number"
            label=""
            name="price_from"
            value={priceFrom !== 0 ? priceFrom : ""}
            onChange={(value) =>
              setPriceFrom(`${parseFloat(value).toFixed(0)}`)
            }
          />
          <Text variant="sm">Tot</Text>
          <TextFieldFormless
            type="number"
            label=""
            name="price_to"
            value={priceTo !== 0 ? priceTo : ""}
            onChange={(value) =>
              setPriceTo(Number(`${parseFloat(value).toFixed(0)}`))
            }
          />
          <Button type="button" onClick={handleSetPriceFilter}>
            <ChevronRightIcon />
          </Button>
        </StackWrapper>
      </ToggleExpand>
      <hr />
    </Stack>
  );

  function setActiveFilters(isChecked: boolean, filterId: string) {
    if (isChecked) {
      return setFilter([...currentFilterIds, filterId]);
    }

    const newFilters = currentFilterIds.filter(
      (item: string) => item !== filterId
    );
    return setFilter(newFilters);
  }

  function handleSetPriceFilter() {
    if (priceFrom > priceTo) {
      // Set the new prices
      setPriceFrom(priceTo);
      setPriceTo(priceFrom);

      // Set new url with filter values
      setPrice(priceTo, priceFrom);
    } else {
      // Set the new prices
      setPriceFrom(priceFrom);
      setPriceTo(priceTo);

      // Set new url with filter values
      setPrice(priceFrom, priceTo);
    }
  }
}
