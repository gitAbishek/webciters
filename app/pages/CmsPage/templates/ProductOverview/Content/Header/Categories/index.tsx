import { useMatches } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import { Button, Link, ReadMoreParent } from "./styled";
import { Category } from "~/schema/products";
import { useOnResize } from "~/utils/hooks";
import { screenSizes } from "~/utils/style";

type Props = {
  categories: Category[];
};

export function Categories({ categories }: Props) {
  const pathName = useMatches()[1]?.pathname;
  const [isReadMoreActive, setIsReadMoreActive] = useState(true);
  const [hasReadMore, setHasReadMore] = useState(false);
  const readMoreRef = useRef<HTMLDivElement | null>(null);
  const ReadMoreParentRef = useRef<HTMLDivElement | null>(null);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isFakeState, setIsFakeState] = useState(true);

  useOnResize(() => {
    setIsDesktop(window.matchMedia(screenSizes.md).matches);
    setIsFakeState(!isFakeState);
  });

  useEffect(() => {
    if (readMoreRef && readMoreRef.current) {
      if (isDesktop) {
        if (readMoreRef.current.clientHeight > 43) {
          setIsReadMoreActive(true);
          setHasReadMore(true);
        } else {
          setIsReadMoreActive(false);
          setHasReadMore(false);
        }
      } else if (readMoreRef.current.clientHeight >= 330) {
        setIsReadMoreActive(true);
        setHasReadMore(true);
      } else {
        setIsReadMoreActive(false);
        setHasReadMore(false);
      }
    } else {
      setIsReadMoreActive(false);
      setHasReadMore(false);
    }
  }, [isDesktop]);

  return (
    <div>
      <ReadMoreParent
        ref={ReadMoreParentRef}
        isReadMoreMobile={isReadMoreActive && !isDesktop}
        isReadMoreDesktop={isReadMoreActive && isDesktop}
      >
        <div ref={readMoreRef}>
          {categories.map((category) => (
            <Link
              isActive={pathName === category.url}
              key={`${category.name}${category.url}`}
              to={category.url}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </ReadMoreParent>

      {hasReadMore && (
        <Button
          type="button"
          onClick={() => setIsReadMoreActive(!isReadMoreActive)}
        >
          {isReadMoreActive ? "Meer categorieën" : "Minder categorieën"}
        </Button>
      )}
    </div>
  );
}
