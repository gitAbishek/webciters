/* eslint-disable react/no-danger */
import { mqReverse } from "~/utils/style";

type Props = {
  mb: number;
  breakpoint: keyof typeof mqReverse;
};

export function MarginBottomBody({ mb, breakpoint }: Props) {
  const css = `
  
  ${mqReverse[breakpoint]} {
     body {
        margin-bottom:${mb}px;
     }
  }
  `;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: css,
      }}
    />
  );
}
