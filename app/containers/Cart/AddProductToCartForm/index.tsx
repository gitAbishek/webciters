import { ReactNode, useState } from "react";
import { ValidatedForm } from "remix-validated-form";
import { withZod } from "@remix-validated-form/with-zod";
import { useFetcher } from "@remix-run/react";
import { toast } from "react-hot-toast";
import { PatchFetchInput, patchFetchInput } from "../schema";
import { useCartProduct } from "~/containers/Cart/hooks";
import { RecommendedProductsPopup } from "~/components/RecommendedProductsPopup";
import { useFetcherNotifier } from "~/containers/SubmitNotifier/hooks";
import { ROUTE_DATA_CART } from "~/utils/constants";
import { HiddenField } from "~/components/Form/HiddenField";
import { ObjectValueToString } from "~/utils/types";
import { SimplifiedProduct } from "~/schema/product";

type Props = {
  children: (isLoading: boolean) => ReactNode;
  id: string;
  withRecommendedPopup?: boolean;
  product?: SimplifiedProduct;
  products?: SimplifiedProduct[];
};

const validator = withZod(patchFetchInput);

// You can use this form by wrapping it around a SubmitBtn and a new_quantity field
// The new_quantity always gets incremented with the current quantity

export function AddProductToCartForm({
  children,
  id,
  withRecommendedPopup = true,
  product,
  products,
}: Props) {
  const { quantity, maybeProduct } = useCartProduct(id);
  const [isPopupActive, setIsPopupActive] = useState(false);
  const fetcher = useFetcher();
  const isLoading =
    fetcher.state === "loading" || fetcher.state === "submitting";

  useFetcherNotifier(fetcher, () => {
    if (withRecommendedPopup) {
      setIsPopupActive(true);
    } else {
      toast.success("Toegevoegd aan je winkelmand", {
        duration: 10000,
      });
    }
  });

  return (
    <div>
      {isPopupActive && (
        <RecommendedProductsPopup
          title={maybeProduct?.name}
          id={id}
          handleClosePopup={() => setIsPopupActive(false)}
        />
      )}
      <ValidatedForm
        validator={validator}
        onSubmit={(data, e) => {
          e.preventDefault();
          submitForm(data);
        }}
      >
        <HiddenField name="spli_guid" value={id} />
        {children(isLoading)}
      </ValidatedForm>
    </div>
  );

  function submitForm(data: PatchFetchInput) {
    const submitData: ObjectValueToString<PatchFetchInput> = {
      new_quantity: `${quantity + data.new_quantity}.0`,
      spli_guid: data.spli_guid,
    };

    fetcher.submit(submitData, { action: ROUTE_DATA_CART, method: "patch" });

    if (product) {
      gtag("event", "add_to_cart", {
        products: [
          {
            id: product.guid,
            name: product.name,
            price: product.price,
            quantity: data.new_quantity,
          },
        ],
      });
    }

    if (products) {
      const combidealProducts = products.map((productInfo) => ({
        id: productInfo.guid,
        name: productInfo.name,
        price: productInfo.price,
        quantity: 1,
      }));

      gtag("event", "add_to_cart", {
        name: "Combideal",
        products: combidealProducts,
      });
    }
  }
}
