import { css, Global } from "@emotion/react";

export function NoScroll() {
  return (
    <Global
      styles={css`
        body {
          overflow: hidden;
        }
      `}
    />
  );
}
