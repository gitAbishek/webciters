import { z } from "zod";
import { createMutation } from "~/api/utils.server";
import { errorOr } from "~/schema/helpers";
import { shippingMethod } from "~/schema/shipping";

const determineDeliveryMethodsBody = z.object({
  cart_guid: z.string(),
});

const determineDeliveryMethodsResponse = errorOr({
  delivery_methods: z.array(shippingMethod),
});

export const determineDeliveryMethods = createMutation({
  withAuthToken: false,
  method: "post",
  bodyParser: determineDeliveryMethodsBody,
  path: "/cart/determine_delivery_methods",
  responseParser: determineDeliveryMethodsResponse,
});
