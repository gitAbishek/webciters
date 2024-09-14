import { Ref } from "react";
import { Node } from "./styled";
import { BaseProps } from "~/components/Typography/index";
import { Weights } from "~/utils/style";

type TextNodeTypes = "p" | "span";

type Props = BaseProps & {
  as?: TextNodeTypes;
  weight?: Weights;
  textRef?: Ref<HTMLParagraphElement>;
};

export function Text({
  children,
  as = "p",
  className,
  variant,
  weight,
  mt,
  mb,
  color,
  id,
  textRef,
}: Props) {
  const NodeAsType = Node.withComponent(as);

  return (
    <NodeAsType
      id={id}
      weight={weight}
      mt={mt}
      mb={mb}
      color={color}
      variant={variant || "md"}
      className={className}
      ref={textRef}
    >
      {children}
    </NodeAsType>
  );
}
