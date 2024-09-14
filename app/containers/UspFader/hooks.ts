import { useRootData } from "~/root";

export function useUspFaderData() {
  return useRootData().uspFader;
}
