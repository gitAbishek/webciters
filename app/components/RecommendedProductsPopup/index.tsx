import { useFetcher } from "@remix-run/react";
import { useEffect } from "react";
import { PopupWrapper, PopupContent, PopupOverlay } from "./styled";
import { PopupHeader } from "./PopupHeader";
import { PopupBody } from "./PopupBody";
import { PopupFooter } from "./PopupFooter";
import { ROUTE_DATA_RECOMMENDED_PRODUCTS } from "~/utils/constants";
import { compilePath } from "~/utils/path";
import { RecommendedProductsData } from "~/routes/data/recommended-products/$spli_guid";

type Props = {
  handleClosePopup: () => void;
  title?: string;
  id: string;
};

const getRecommendedProductsPath = compilePath(ROUTE_DATA_RECOMMENDED_PRODUCTS);

export function RecommendedProductsPopup({
  handleClosePopup,
  title,
  id,
}: Props) {
  const fetcher = useFetcher<RecommendedProductsData>();
  const { load } = fetcher;

  useEffect(() => {
    load(getRecommendedProductsPath({ spli_guid: id }));
  }, [load, id]);

  return (
    <PopupWrapper>
      <PopupOverlay onClick={handleClosePopup} />
      <PopupContent>
        <PopupHeader
          handleClosePopup={handleClosePopup}
          addedProductText={title}
        />
        {getContent()}
        <PopupFooter closePopup={handleClosePopup} />
      </PopupContent>
    </PopupWrapper>
  );

  function getContent() {
    if (fetcher.data && fetcher.data.products.length > 0) {
      return (
        <PopupBody
          products={fetcher.data.products}
          title="Wellicht vind je dit ook interessant?"
        />
      );
    }

    return null;
  }
}
