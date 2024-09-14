import React, { ReactNode, useRef, useState } from "react";
import {
  Scroll,
  Next,
  Outer,
  Prev,
  Root,
  Indicator,
  IndicatorsWrapper,
} from "./styled";
import { useOnResize } from "~/utils/hooks";
import { debounce } from "~/utils/debounce";
import { Colors, Size } from "~/utils/style";
import {
  SliderChevronLeftIcon,
  SliderChevronRightIcon,
} from "~/components/Icon";

type Props = {
  children: ReactNode;
  gradientColor?: Colors;
  withIndicators?: boolean;
  className?: string;
  spacing: Size;
  hasOffset?: boolean;
};

export function Slider({
  children,
  gradientColor = "white",
  withIndicators,
  className,
  spacing,
  hasOffset = true,
}: Props) {
  const scrollElement = useRef<HTMLDivElement>(null);
  const [isScrollContainer, setIsScrollContainer] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  const onHandleScroll = debounce(() => {
    if (!scrollElement.current) return;

    // We need to take the outerElement since the clientWidth is not dividable by scrollLeft because of negative margin use
    const { scrollLeft, clientWidth, scrollWidth } = scrollElement.current;

    const { paddingLeft, paddingRight } = getComputedStyle(
      scrollElement.current
    );

    const offset = parseFloat(paddingLeft) + parseFloat(paddingRight);

    const preciseSlideIndex = scrollLeft / (clientWidth - offset);
    const preciseSlideCount = (scrollWidth - offset) / (clientWidth - offset);

    // Since browsers have precision rounding errors we keep the calculation at max 2 precision.
    setCurrentSlideIndex(Number(preciseSlideIndex.toFixed(2)));
    setSlideCount(Number(preciseSlideCount.toFixed(2)));
  });

  useOnResize(() => {
    if (!scrollElement.current) return;
    const { clientWidth, scrollWidth } = scrollElement.current;

    setIsScrollContainer(clientWidth < scrollWidth);
    onHandleScroll();
  });

  return (
    <Root className={className}>
      <Outer
        spacing={spacing}
        hasOffset={hasOffset}
        gradientColor={gradientColor}
      >
        <Scroll
          hasOffset={hasOffset}
          onScroll={onHandleScroll}
          ref={scrollElement}
        >
          {children}
        </Scroll>
        {isScrollContainer && (
          <>
            <Prev
              onClick={() => onNavigate(-1)}
              disabled={currentSlideIndex === 0}
              type="button"
            >
              <SliderChevronLeftIcon />
            </Prev>
            <Next
              onClick={() => onNavigate(1)}
              disabled={compareByMinimalPrecision(
                currentSlideIndex + 1,
                slideCount
              )}
              type="button"
            >
              <SliderChevronRightIcon />
            </Next>
          </>
        )}
      </Outer>
      {withIndicators && slideCount > 1 && (
        <IndicatorsWrapper>
          {[...new Array(slideCount)].map((el, i) => (
            <Indicator key={el} isActive={i === currentSlideIndex} />
          ))}
        </IndicatorsWrapper>
      )}
    </Root>
  );

  function onNavigate(direction: -1 | 1) {
    if (!scrollElement.current) return;

    const { scrollLeft, clientWidth } = scrollElement.current;
    const scrollAmount = clientWidth * direction;

    scrollElement.current.scroll({
      left: scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  }
}

function compareByMinimalPrecision(a: number, b: number) {
  return a.toFixed(2) === b.toFixed(2);
}
