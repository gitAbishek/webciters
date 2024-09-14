import { useSearchParams } from "@remix-run/react";
import { PossibleFilter } from "~/schema/filters";
import { Filter } from "~/schema/products";

const FILTER_KEY = "pt_filters";
const PRICE_MIN_KEY = "price_min";
const PRICE_MAX_KEY = "price_max";
const SORT_KEY = "sort";

export const SORT_OPTIONS = [
  {
    name: "Best verkocht",
    value: "1",
  },
  {
    name: "Prijs laag - hoog",
    value: "2",
  },
  {
    name: "Prijs hoog - laag",
    value: "3",
  },
];

function sortOptionByValue(value: string | null) {
  if (!value) return null;
  return SORT_OPTIONS.find((option) => option.value === value);
}

const filterByActiveFilterIds = (
  filterIds: string[],
  possibleFilters: PossibleFilter[]
) => {
  let selectedFiltersFromUrl: Filter[] = [];

  possibleFilters.forEach((filterCategory) =>
    filterCategory.possible_filter_values.forEach((filter) => {
      if (filterIds.includes(`${filter.id}`)) {
        selectedFiltersFromUrl = [
          { ...filter, category: filterCategory.name },
          ...selectedFiltersFromUrl,
        ];
      }
      return null;
    })
  );

  return selectedFiltersFromUrl;
};

export function useFilter(possibleFilters: PossibleFilter[]) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilterIds = searchParams.get(FILTER_KEY)?.split(",") || [];
  const priceFrom = searchParams.get(PRICE_MIN_KEY) || null;
  const priceTo = searchParams.get(PRICE_MAX_KEY) || null;
  const priceObject = { priceFrom, priceTo };

  return {
    current: searchParams,
    currentSort:
      sortOptionByValue(searchParams.get(SORT_KEY)) || SORT_OPTIONS[0],
    currentFilterIds,
    currentFilters: filterByActiveFilterIds(currentFilterIds, possibleFilters),
    currentPriceFilter: priceObject,
    setFilter,
    setSort,
    setPrice,
    deleteAllFilters,
  };

  function setFilter(value: string[]) {
    if (value.length !== 0 && value.join("") !== "") {
      searchParams.set(FILTER_KEY, `${value}`);
    } else {
      searchParams.delete(FILTER_KEY);
    }

    setSearchParams(searchParams);
  }

  function setSort(value: string) {
    searchParams.set(SORT_KEY, value);

    setSearchParams(searchParams);
  }

  function setPrice(min: string | number | null, max: string | number | null) {
    if (min) {
      searchParams.set(PRICE_MIN_KEY, String(min));
    } else {
      searchParams.delete(PRICE_MIN_KEY);
    }

    if (max) {
      searchParams.set(PRICE_MAX_KEY, String(max));
    } else {
      searchParams.delete(PRICE_MAX_KEY);
    }

    setSearchParams(searchParams);
  }

  function deleteAllFilters() {
    searchParams.delete(FILTER_KEY);
    searchParams.delete(PRICE_MIN_KEY);
    searchParams.delete(PRICE_MAX_KEY);

    setSearchParams(searchParams);
  }
}
