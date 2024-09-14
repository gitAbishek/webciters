import { useRootData } from "~/root";

export function useGtmId() {
  return useRootData().gtmId;
}
