import { Root } from "./styled";
import { ActiveFilters } from "./ActiveFilters";
import { Filters } from "./Filters";
import { PossibleFilter } from "~/schema/filters";

type Props = {
  filters: PossibleFilter[];
};

export function Sidebar({ filters }: Props) {
  return (
    <Root>
      <ActiveFilters filters={filters} />
      <Filters filters={filters} />
    </Root>
  );
}
