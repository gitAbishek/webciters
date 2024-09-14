import { LoaderFunction } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";

export type DataFunctionArgs = Parameters<LoaderFunction>[0];

export type Unboxed<T> = T extends (infer U)[] ? U : T;

export type AwaitedRecord<T> = {
  [P in keyof T]: Awaited<T[P]>;
};

export type ObjectValueToString<T> = {
  [P in keyof T]: string;
};

export type Fetcher = ReturnType<typeof useFetcher>;
