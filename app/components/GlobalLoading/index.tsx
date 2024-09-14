import { useTransition } from "@remix-run/react";
import { Progress, ProgressBar } from "./styled";

export function GlobalLoading() {
  const transition = useTransition();
  const isActive = transition.state !== "idle";

  return isActive ? (
    <Progress>
      <ProgressBar />
    </Progress>
  ) : null;
}
