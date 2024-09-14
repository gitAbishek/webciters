// infering types copied from older react router version
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0fcefb02425655d8ab3be13b265bab03f721a58d/types/react-router/index.d.ts

import { generatePath } from "react-router";

export type ExtractRouteOptionalParam<
  T extends string,
  U = string | number | boolean
> = T extends `${infer Param}?`
  ? { [k in Param]?: U }
  : T extends `${infer Param}*`
  ? { [k in Param]?: U }
  : T extends `${infer Param}+`
  ? { [k in Param]: U }
  : { [k in T]: U };

export type ExtractRouteParams<T extends string, U = string> = string extends T
  ? { [k in string]?: U }
  : T extends `${infer _Start}:${infer ParamWithOptionalRegExp}/${infer Rest}`
  ? ParamWithOptionalRegExp extends `${infer Param}(${infer _RegExp})`
    ? ExtractRouteOptionalParam<Param, U> & ExtractRouteParams<Rest, U>
    : ExtractRouteOptionalParam<ParamWithOptionalRegExp, U> &
        ExtractRouteParams<Rest, U>
  : T extends `${infer _Start}:${infer ParamWithOptionalRegExp}`
  ? ParamWithOptionalRegExp extends `${infer Param}(${infer _RegExp})`
    ? ExtractRouteOptionalParam<Param, U>
    : ExtractRouteOptionalParam<ParamWithOptionalRegExp, U>
  : {};

export function compilePath<P extends string>(path: P) {
  return function getInterpolatedPath(params: ExtractRouteParams<P>) {
    return generatePath(path, params);
  };
}
