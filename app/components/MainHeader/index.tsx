import { useState } from "react";
import { NavFocusOverlay } from "~/components/MainHeader/styled";
import { TopNav } from "~/containers/TopNav";
import { UspFader } from "~/containers/UspFader";

export function MainHeader() {
  const [isSearchInputFocused, setIsSearchInputFocused] = useState(false);

  return (
    <NavFocusOverlay isFocused={isSearchInputFocused}>
      <UspFader />
      <TopNav onFocusChange={setIsSearchInputFocused} />
    </NavFocusOverlay>
  );
}
