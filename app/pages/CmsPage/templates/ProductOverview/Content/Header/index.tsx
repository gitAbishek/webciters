import { useRef, useState } from "react";
import { Heading } from "~/components/Typography";
import {
  Root,
  Image,
  TextEllipses,
  Grid,
  EllipsisWrapper,
  ReadMoreButton,
} from "./styled";
import { Categories } from "./Categories";
import { Category, HeaderContent } from "~/schema/products";
import { Stack } from "~/components/Stack";
import { NO_IMAGE_FOUND } from "~/utils/constants";
import { useOnResize } from "~/utils/hooks";

type Props = {
  categories: Category[];
  headerContent: HeaderContent;
};

export function Header({ categories, headerContent }: Props) {
  const [hasEllipsis, setHasEllipsis] = useState(true);
  const [isEllipsisActive, setIsEllipsisActive] = useState(true);
  const textRef = useRef<HTMLParagraphElement>(null);

  // The height of 60 equals to 3 paragraph lines with the following size:
  // font: var(--font-size-md) / var(--line-height-md) var(--body-font);
  const maxReadMoreLinesHeight = 60;

  // This checks if the text needs a readmore button
  useOnResize(() => {
    const textHeight = textRef?.current?.clientHeight;
    const textScrollHeight = textRef?.current?.scrollHeight;

    if (
      textHeight &&
      textScrollHeight &&
      textScrollHeight > maxReadMoreLinesHeight
    ) {
      setHasEllipsis(true);
    } else {
      setHasEllipsis(false);
    }
  });

  return (
    <Root>
      <Stack direction="column" gap={2}>
        <Heading as="h1" variant="xl">
          {headerContent.name}
        </Heading>
        <Stack direction="column" gap={4}>
          <EllipsisWrapper
            direction="column"
            gap={2}
            isEllipsisActive={isEllipsisActive}
            wrap
          >
            {headerContent.description && (
              <Grid>
                <TextEllipses
                  textRef={textRef}
                  isEllipsisActive={isEllipsisActive}
                >
                  {headerContent.description}
                </TextEllipses>
              </Grid>
            )}
            {hasEllipsis && (
              <ReadMoreButton
                onClick={() => setIsEllipsisActive(!isEllipsisActive)}
              >
                {isEllipsisActive ? "Meer" : "Minder"}
              </ReadMoreButton>
            )}
          </EllipsisWrapper>
          <Stack direction="column" gap={5}>
            {headerContent.header_image_url && (
              <Image
                src={headerContent.header_image_url}
                alt={headerContent.header_image_alt || NO_IMAGE_FOUND}
              />
            )}
            <Categories categories={categories} />
          </Stack>
        </Stack>
      </Stack>
    </Root>
  );
}
