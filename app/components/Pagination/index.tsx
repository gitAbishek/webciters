import { Stack } from "~/components/Stack";
import { ChevronLeftIcon, ChevronRightIcon } from "~/components/Icon";
import { Text } from "~/components/Typography";
import { AccessibleButton } from "~/components/AccessibleButton";

type Props = {
  onClickNext: () => void;
  onClickPrev: () => void;
  currentPage: number;
  pageCount: number;
};

export function Pagination({
  onClickNext,
  onClickPrev,
  currentPage,
  pageCount,
}: Props) {
  const isDisabledNext = currentPage === pageCount;
  const isDisabledPrev = currentPage - 1 === 0;

  return (
    <Stack gap={6} align="center" justify="center" mt={6}>
      <AccessibleButton
        type="button"
        onClick={onClickPrev}
        disabled={isDisabledPrev}
      >
        <ChevronLeftIcon size="md" />
      </AccessibleButton>
      <Text>
        Pagina {currentPage} van {pageCount}
      </Text>
      <AccessibleButton
        type="button"
        onClick={onClickNext}
        disabled={isDisabledNext}
      >
        <ChevronRightIcon size="md" />
      </AccessibleButton>
    </Stack>
  );
}
