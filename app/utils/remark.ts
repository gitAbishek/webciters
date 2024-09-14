import remarkParse from "remark-parse";
import rehypeReact, { Options as RehypeReactOptions } from "rehype-react";
import { createElement, Fragment, ReactElement } from "react";
import { unified } from "unified";
import remarkToRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import { ComponentsWithoutNodeOptions } from "rehype-react/lib/complex-types";
import rehypeSlug from "rehype-slug";

export interface UseRemarkSyncOptions {
  rehypeReactOptions?: ComponentsWithoutNodeOptions;
}

export const useRemarkSync = (
  source: string,
  { rehypeReactOptions }: UseRemarkSyncOptions = {}
): ReactElement =>
  unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkToRehype)
    .use(rehypeSlug)
    .use(rehypeReact, {
      createElement,
      Fragment,
      passNode: false,
      ...rehypeReactOptions,
    } as RehypeReactOptions)
    .processSync(source).result as ReactElement;
