import { ReactNode } from "react";
import { TitleIconWrapper, ToggleBox, ChevronDownIcon } from "./styled";
import { Stack } from "~/components/Stack";

type Props = {
  title: ReactNode;
  children?: ReactNode;
  isActive: boolean;
  onClick: () => void;
};

export function ToggleExpand({ title, children, isActive, onClick }: Props) {
  return (
    <Stack spacing={3} direction="column">
      <TitleIconWrapper onClick={onClick}>
        {title}
        <ChevronDownIcon size="sm" isActive={isActive} />
      </TitleIconWrapper>
      {isActive && <ToggleBox>{children}</ToggleBox>}
    </Stack>
  );
}
