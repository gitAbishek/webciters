import { useEffect } from "react";

/* eslint-disable no-console */

export function useDebugging(name: string) {
  useEffect(() => {
    console.log(`${name} is mounted`);

    return () => {
      console.log(`${name} is unmounted`);
    };
  }, [name]);
}
