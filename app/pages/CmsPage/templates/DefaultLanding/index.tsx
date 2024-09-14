import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function DefaultLanding({ children }: Props) {
  return <div>{children}</div>;
}
