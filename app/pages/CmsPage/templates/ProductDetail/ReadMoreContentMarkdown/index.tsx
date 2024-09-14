import { useState } from "react";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";
import { ArrowButton } from "~/components/ArrowButton";
import { useOnResize } from "~/utils/hooks";
import { screenSizes } from "~/utils/style";
import { MardownWrapper, TextWithinButton } from "./styled";
import { Heading } from "~/components/Typography";

type Props = {
  title: string;
  content: string;
  buttonText: string;
};

export function ReadMoreContentMarkdown({ content, title, buttonText }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const limit = 40;
  const isReadMore = content
    ? content.split(" ", limit + 1).length > limit
    : null;

  useOnResize(() => {
    setIsDesktop(window.matchMedia(screenSizes.lg).matches);
  });

  return (
    <MardownWrapper>
      <Heading as="h3">{title}</Heading>
      <MarkdownRenderer
        paragraphVariant="md"
        content={getFinalProductInformationText(content)}
      />
      {!isDesktop && isReadMore && (
        <ArrowButton onClick={buttonHandler}>
          <TextWithinButton as="span" variant="sm" weight="semi-bold">
            {isExpanded ? "Lees minder" : buttonText}
          </TextWithinButton>
        </ArrowButton>
      )}
    </MardownWrapper>
  );

  function getFinalProductInformationText(text: string) {
    if (isDesktop) return text;
    return isReadMore && !isExpanded
      ? `${text.split(" ", limit).join(" ")}...`
      : text;
  }

  function buttonHandler() {
    setIsExpanded(!isExpanded);
  }
}
