import {
  FilterButton,
  ProductOverviewOptions,
  Root,
  StackSortWrapper,
  GridBlock,
} from "./styled";
import { Header } from "./Header";
import { ProductCard } from "~/components/ProductCard";
import { SimplifiedProduct } from "~/schema/product";
import { Select } from "~/components/Select";
import { Text } from "~/components/Typography";
import { FilterIcon } from "~/components/Icon";
import { Category, HeaderContent } from "~/schema/products";
import { Pagination } from "~/components/Pagination";
import { SORT_OPTIONS, useFilter } from "~/utils/productsOverview";
import { PossibleFilter } from "~/schema/filters";

type Props = {
  products: SimplifiedProduct[];
  setIsActiveFilterPopup: () => void;
  categories: Category[];
  headerContent: HeaderContent;
  filters: PossibleFilter[];
  setNextPage: () => void;
  setPrevPage: () => void;
  currentPage: number;
  hasPagination: boolean;
  pageCount: number;
  productCount: number;
};

export function Content({
  products,
  setIsActiveFilterPopup,
  categories,
  headerContent,
  filters,
  currentPage,
  hasPagination,
  setNextPage,
  setPrevPage,
  pageCount,
  productCount,
}: Props) {
  const { setSort, currentSort } = useFilter(filters);

  return (
    <Root>
      <Header categories={categories} headerContent={headerContent} />
      <ProductOverviewOptions>
        <FilterButton
          type="button"
          variant="secondary"
          onClick={setIsActiveFilterPopup}
          size="sm"
        >
          <FilterIcon size="md" />
          Filter
        </FilterButton>
        <StackSortWrapper align="center" gap={3}>
          <Select
            label=""
            options={SORT_OPTIONS}
            onSelectedItemChange={({ selectedItem }) =>
              setSort(selectedItem!.value)
            }
            selectedItem={currentSort}
          />
        </StackSortWrapper>
        <Text>
          <strong>{productCount}</strong> resultaten
        </Text>
      </ProductOverviewOptions>
      <GridBlock>
        {products.map((product) => (
          <ProductCard key={product.guid} product={product} withDeliveryRow />
        ))}
      </GridBlock>
      {hasPagination && (
        <Pagination
          onClickNext={setNextPage}
          onClickPrev={setPrevPage}
          currentPage={currentPage}
          pageCount={pageCount}
        />
      )}
    </Root>
  );
}
