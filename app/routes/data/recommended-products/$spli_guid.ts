import { DataFunctionArgs } from "~/utils/types";
import { getSession } from "~/utils/session";
import { getRecommendedProducts } from "~/api/recommendedProducts";

export const loader = async ({ request, params }: DataFunctionArgs) => {
  const session = await getSession(request);

  const spli_guid = params.spli_guid!;

  const result = await getRecommendedProducts(session, { spli_guid });

  return result;
};

export type RecommendedProductsData = Awaited<ReturnType<typeof loader>>;
