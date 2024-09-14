export function getClientIp(request: Request) {
  const headerKey = process.env.CLIENT_IP_HEADER_KEY;

  if (!headerKey) return "111.111.111.111";

  const clientIp = request.headers.get(headerKey);

  if (!clientIp) {
    throw new Error("Could not get ip by headerKey");
  }

  return clientIp;
}
