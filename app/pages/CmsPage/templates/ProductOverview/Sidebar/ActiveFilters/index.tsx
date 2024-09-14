import { Stack } from "~/components/Stack";
import { Text } from "~/components/Typography";
import { Button, RemoveButton, TextEllipses } from "./styled";
import { CloseIcon } from "~/components/Icon";
import { useFilter } from "~/utils/productsOverview";
import { PossibleFilter } from "~/schema/filters";

type Props = {
  filters: PossibleFilter[];
};

export function ActiveFilters({ filters }: Props) {
  const {
    setPrice,
    setFilter,
    currentFilters,
    currentFilterIds,
    currentPriceFilter,
    deleteAllFilters,
  } = useFilter(filters);

  const hasSelectedFilters = currentFilters.length > 0;

  return (
    <div>
      {hasSelectedFilters && (
        <Stack gap={2} justify="space-between" mb={4}>
          <>
            <Text weight="bold" variant="md">
              Je filters
            </Text>
            <Button type="button" onClick={deleteAllFilters}>
              Wis alle filters
            </Button>
          </>
        </Stack>
      )}
      <Stack direction="column" mb={4}>
        {currentPriceFilter.priceTo && (
          <Stack justify="space-between" align="center">
            <Stack gap={1} flex={1}>
              <Text weight="semi-bold" variant="sm">
                Price
              </Text>
              <TextEllipses variant="sm">{`${currentPriceFilter.priceFrom} - ${currentPriceFilter.priceTo}`}</TextEllipses>
            </Stack>
            <RemoveButton type="button" onClick={() => setPrice(null, null)}>
              <CloseIcon size="md" />
            </RemoveButton>
          </Stack>
        )}

        {currentFilters.map((filter) => (
          <Stack key={filter.id} justify="space-between" align="center">
            <Stack gap={1} flex={1}>
              <Text weight="semi-bold" variant="sm">
                {filter.category}
              </Text>
              <TextEllipses variant="sm">{filter.name}</TextEllipses>
            </Stack>
            <RemoveButton
              type="button"
              onClick={() =>
                setFilter(
                  currentFilterIds.filter(
                    (item: string) => item !== `${filter.id}`
                  )
                )
              }
            >
              <CloseIcon size="md" />
            </RemoveButton>
          </Stack>
        ))}
      </Stack>
    </div>
  );
}
