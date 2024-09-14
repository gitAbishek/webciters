import { ServiceRequest } from "~/pages/ServiceRequest";
import { DataFunctionArgs } from "~/utils/types";
import { getSession } from "~/utils/session";
import { getServiceTypes } from "~/api/serviceRequest";

export const loader = async ({ request }: DataFunctionArgs) => {
  const session = await getSession(request);

  return {
    serviceTypes: await getServiceTypes(session, {}),
  };
};

export type ServiceRequestPageData = Awaited<ReturnType<typeof loader>>;

export default ServiceRequest;
