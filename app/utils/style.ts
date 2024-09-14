import { css } from "@emotion/react";
import { StyledOptions } from "@emotion/styled/base";

export const containerPadding = css`
  padding: 0 var(--space-4);
`;

// max-width - containerPadding * 2
export const maxContentWidth = css`
  max-width: calc(var(--max-width) - var(--space-8));
`;

export type Weights = "medium" | "semi-bold" | "bold";

export type Colors =
  | "white"
  | "gray-04"
  | "gray-10"
  | "gray-50"
  | "gray-60"
  | "black"
  | "primary"
  | "secondary"
  | "error"
  | "green";

export const mq = {
  sm: "@media only screen and (min-width: 30em)", // 480px
  md: "@media only screen and (min-width: 48em)", // 768px
  lg: "@media only screen and (min-width: 62em)", // 992px
  xl: "@media only screen and (min-width: 80em)", // 1280px
  xxl: "@media only screen and (min-width: 96em)", // 1537px
};

export const mqReverse = {
  xs: "", // Empty capture
  sm: "@media only screen and (max-width: 48em)", // 480px
  md: "@media only screen and (max-width: 62em)", // 768px
  lg: "@media only screen and (max-width: 80em)", // 992px
  xl: "@media only screen and (max-width: 96em)", // 1280px
};

export const screenSizes = {
  sm: "(min-width: 30em)", // 480px
  md: "(min-width: 48em)", // 768px
  lg: "(min-width: 62em)", // 992px
  xl: "(min-width: 80em)", // 1280px
  xxl: "(min-width: 96em)", // 1537px
};

export type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 13;

/**
 * Work in progress,
 * Not sure if we should use this, while the API is pretty nice for the consuming component eg:
 * <Stack direction={['row', 'column']} /> // which means: mobile = xs, column = md
 * But the implementation seems pretty difficult and hard to maintain.
 */

export type MediaQueryKeys = "xs" | keyof typeof mq;

export type MediaQueryVal<T> = Record<MediaQueryKeys, T>;

export type MediaQueryProp<T> = T | T[];

// export function mapToMediaQueryVal<T>(value: T | T[]) {
// const [xs, sm, md, lg, xl, xxl] = Array.isArray(value) ? value : [value];

// const mapped: MediaQueryVal<T> = {};

// mapped.xs = xs;
// mapped.sm = sm || mapped.xs;
// mapped.md = md || mapped.sm;
// mapped.lg = lg || mapped.md;
// mapped.xl = xl || mapped.lg;
// mapped.xxl = xxl || mapped.xl;

// return mapped;
// }

/**
 * Atm it seems best to do this only for components that are exposed directly without a wrapper component
 */
// https://github.com/emotion-js/emotion/issues/2193
const reactProps = [
  "children",
  "dangerouslySetInnerHTML",
  "key",
  "ref",
  "autoFocus",
  "defaultValue",
  "defaultChecked",
  "innerHTML",
  "suppressContentEditableWarning",
  "suppressHydrationWarning",
  "id",
];

export const noPropsForwarding: StyledOptions<unknown> = {
  shouldForwardProp: (prop: string) => reactProps.includes(prop),
};
