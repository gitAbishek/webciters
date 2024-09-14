import { iconify } from "~/components/Icon/util";

export const Check = iconify(
  16,
  <path
    fill="currentColor"
    d="M12.043 4 6.438 9.057l-2.37-2.46L2.5 8.026 6.329 12 13.5 5.536z"
  />
);

// svg does not support css variables
export function asDataUrl(color: string) {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='${encodeURIComponent(
    color
  )}' d='M12.043 4 6.438 9.057l-2.37-2.46L2.5 8.026 6.329 12 13.5 5.536z'/%3E%3C/svg%3E`;
}
