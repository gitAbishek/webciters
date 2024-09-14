import { useState } from "react";
import { Heading } from "~/components/Typography";
import { TextWithinButton } from "~/components/TextBlock/styled";
import { ArrowButton } from "~/components/ArrowButton";
import { useOnResize } from "~/utils/hooks";
import { screenSizes } from "~/utils/style";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";

type Props = {
  title: string;
  text: string;
  readMoreButtonText: string;
};

export function TextBlock({ title, text, readMoreButtonText }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const limit = 40;
  const isReadMore = text.split(" ", limit + 1).length > limit;

  useOnResize(() => {
    setIsDesktop(window.matchMedia(screenSizes.lg).matches);
  });

  return (
    <div>
      <Heading as="h3" mb={2}>
        {title}
      </Heading>
      <MarkdownRenderer paragraphVariant="md" content={getFinalText()} />
      {!isDesktop && isReadMore && (
        <ArrowButton onClick={buttonHandler}>
          <TextWithinButton as="span" variant="sm" weight="semi-bold">
            {isExpanded ? "Lees minder" : readMoreButtonText}
          </TextWithinButton>
        </ArrowButton>
      )}
    </div>
  );

  function buttonHandler() {
    setIsExpanded(!isExpanded);
  }

  function getFinalText() {
    if (isDesktop) return text;
    return isReadMore && !isExpanded
      ? `${text.split(" ", limit).join(" ")}...`
      : text;
  }
}
