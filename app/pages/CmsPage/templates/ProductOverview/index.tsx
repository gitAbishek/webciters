import { useEffect, useState } from "react";
import { useSearchParams } from "@remix-run/react";
import { Container } from "~/components/Container";
import { Breadcrumb } from "~/components/Breadcrumb";
import { Stack } from "~/components/Stack";
import { Sidebar } from "./Sidebar";
import { Content } from "./Content";
import { FilterPopup } from "~/pages/CmsPage/templates/ProductOverview/Sidebar/FilterPopup";
import { PlpTemplate } from "~/schema/cms";
import { useFilter } from "~/utils/productsOverview";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";

const PRODUCTS_PER_PAGE = 48;

type Props = {
  page: PlpTemplate;
};

export function ProductOverview({ page: { producttag_data: data } }: Props) {
  const possibleFilters = data.possible_filters;
  const categories = data.sub_tags;
  const { currentFilters, deleteAllFilters } = useFilter(possibleFilters);
  const [isActiveFilterPopup, setIsActiveFilterPopup] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("page") || "1", 10) || 1
  );
  const productCount = data.products.length;
  const detailedDescription = data.detailed_description || null;

  // Pagination
  const pageCount = Math.ceil(data.products.length / PRODUCTS_PER_PAGE);
  const hasPagination = pageCount > 1;

  // Set current page to 1 when number to high
  if (currentPage > pageCount) setCurrentPage(pageCount);

  // Paginate products
  const arrayStartIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = data.products.slice(
    arrayStartIndex,
    arrayStartIndex + PRODUCTS_PER_PAGE
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  return (
    <Container>
      <div>
        <Stack direction="column" gap={4}>
          {data.breadcrumbs && <Breadcrumb breadcrumbs={data.breadcrumbs} />}
          <Stack direction="row" gap={9}>
            <Sidebar filters={possibleFilters} />
            <Content
              products={paginatedProducts}
              setIsActiveFilterPopup={() => setIsActiveFilterPopup(true)}
              categories={categories}
              headerContent={data}
              productCount={productCount}
              filters={possibleFilters}
              setNextPage={setNextPage}
              setPrevPage={setPrevPage}
              pageCount={pageCount}
              currentPage={currentPage}
              hasPagination={hasPagination}
            />
          </Stack>
        </Stack>
        {isActiveFilterPopup && (
          <FilterPopup
            selectedFilters={currentFilters}
            closePopup={() => setIsActiveFilterPopup(false)}
            filters={possibleFilters}
            deleteAllFilters={deleteAllFilters}
            productsLength={data.products.length}
          />
        )}
      </div>
      {detailedDescription && (
        <Stack direction="column" mt={10}>
          <MarkdownRenderer content={detailedDescription} />
        </Stack>
      )}
    </Container>
  );

  function setNextPage() {
    setCurrentPage(currentPage + 1);
    setSearchParam(currentPage + 1);
  }

  function setPrevPage() {
    setCurrentPage(currentPage - 1);
    setSearchParam(currentPage - 1);
  }

  function setSearchParam(currentPageNumber: number) {
    searchParams.set("page", String(currentPageNumber));
    setSearchParams(searchParams);
  }
}
