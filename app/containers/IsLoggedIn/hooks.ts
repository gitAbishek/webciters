import { useRootData } from "~/root";

export function useIsLoggedIn() {
  return useRootData().isLoggedIn;
}
