import { useEffect, useRef, useState } from "react";
import { FadeItem, Root } from "./styled";
import { useUspFaderData } from "~/containers/UspFader/hooks";
import { IconMarkdown } from "~/pages/CmsPage/elements/IconMarkdown";

const delay = 5000;

type ReturnTypeOfSetTimeout = ReturnType<typeof setTimeout>;

export function UspFader() {
  const usps = useUspFaderData();

  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<ReturnTypeOfSetTimeout | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    if (isPlaying) {
      timeoutRef.current = setTimeout(
        () =>
          setActiveIndex((prevActiveIndex) =>
            prevActiveIndex === usps.length - 1 ? 0 : prevActiveIndex + 1
          ),
        delay
      );
    }

    return () => {
      resetTimeout();
    };
  }, [activeIndex, usps.length, isPlaying]);

  return (
    <Root>
      {usps.map((usp, index) => (
        <FadeItem
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          activeIndex={activeIndex === index}
          key={usp.markdown_content}
        >
          <IconMarkdown gap={1} data={usp} smallerIcon />
        </FadeItem>
      ))}
    </Root>
  );
}
