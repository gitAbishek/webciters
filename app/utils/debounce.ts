export function debounce(fn: Function, wait = 100) {
  let timeout: ReturnType<typeof setTimeout>;
  return function debouncedFn(...args: unknown[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };
}
