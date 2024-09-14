import { Filters } from "~/pages/CmsPage/templates/ProductOverview/Sidebar/Filters";
import {
  InnerWrapper,
  PopupOverlay,
  PopupWrapper,
  TitleWrapper,
  Content,
  ButtonsWrapper,
  ButtonDeleteFilters,
  FiltersWrapper,
} from "./styled";
import { Heading, Text } from "~/components/Typography";
import { AccessibleButton } from "~/components/AccessibleButton";
import { CloseIcon } from "~/components/Icon";
import { Button } from "~/components/Button";
import { Stack } from "~/components/Stack";
import { Filter } from "~/schema/products";
import { PossibleFilter } from "~/schema/filters";

type Props = {
  filters: PossibleFilter[];
  productsLength: number;
  closePopup: () => void;
  selectedFilters: Filter[];
  deleteAllFilters: () => void;
};

export function FilterPopup({
  filters,
  productsLength,
  closePopup,
  selectedFilters,
  deleteAllFilters,
}: Props) {
  return (
    <PopupWrapper>
      <PopupOverlay onClick={closePopup} />
      <InnerWrapper>
        <TitleWrapper gap={4} align="center" justify="space-between">
          <Heading as="h2" variant="lg" color="white">
            Filter
          </Heading>
          <AccessibleButton type="button" onClick={closePopup}>
            <CloseIcon size="md" color="white" />
          </AccessibleButton>
        </TitleWrapper>
        <Content>
          <Stack direction="column" gap={2} flex={1} justify="space-between">
            <FiltersWrapper>
              <Filters filters={filters} />
            </FiltersWrapper>
            <ButtonsWrapper>
              <Button type="button">Toon {productsLength} producten</Button>
              <ButtonDeleteFilters type="button" onClick={deleteAllFilters}>
                <Text variant="md" weight="semi-bold">
                  Wis filters ({selectedFilters.length})
                </Text>
              </ButtonDeleteFilters>
            </ButtonsWrapper>
          </Stack>
        </Content>
      </InnerWrapper>
    </PopupWrapper>
  );
}
