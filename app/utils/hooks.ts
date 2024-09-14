import { useEffect, useLayoutEffect, useRef } from "react";
import { debounce } from "~/utils/debounce";
import { uniqueKey } from "~/utils/loops";

export function useOnResize(callback: () => void, timeOut = 1000) {
  useEffect(() => {
    const handleResize = debounce(callback, timeOut);

    // always gets invoked at mount as well
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [callback, timeOut]);
}

export const useEnhancedEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useUniqueKey() {
  const id = useRef<string>();

  if (id.current === undefined) {
    id.current = uniqueKey();
  }

  return id.current;
}
