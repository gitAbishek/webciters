import * as React from "react";
import { ReactNode, useState } from "react";
import { Root, TitleIconWrapper, ToggleBox, ChevronDownIcon } from "./styled";
import { Heading } from "~/components/Typography";

type Props = {
  title: string;
  children?: ReactNode;
  hasPadding?: boolean;
};

export function ToggleExpand({ title, children, hasPadding }: Props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Root spacing={3} direction="column" hasPadding={hasPadding}>
      <TitleIconWrapper
        type="button"
        onClick={() => setIsActive(!isActive)}
        hasPadding={hasPadding}
      >
        <ChevronDownIcon
          size="sm"
          isActive={isActive}
          hasPadding={hasPadding}
        />
        <Heading as="h3" variant="md" weight="semi-bold">
          {title}
        </Heading>
      </TitleIconWrapper>
      {isActive && <ToggleBox>{children}</ToggleBox>}
    </Root>
  );
}
