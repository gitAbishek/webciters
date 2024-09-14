import { Node, Variants } from "./styled";
import { BaseProps } from "./index";

export type HeadingNodeTypes = "h1" | "h2" | "h3" | "h4" | "h5";

const headingDefaults: Record<HeadingNodeTypes, Variants> = {
  h1: "xxl",
  h2: "xl",
  h3: "lg",
  h4: "lg",
  h5: "lg",
};

type Props = BaseProps & {
  as: HeadingNodeTypes;
};

export function Heading({
  children,
  as,
  className,
  variant,
  mt,
  mb,
  color,
  weight,
  id,
}: Props) {
  const NodeAsType = Node.withComponent(as);

  return (
    <NodeAsType
      variant={variant || headingDefaults[as]}
      mt={mt}
      mb={mb}
      className={className}
      color={color}
      weight={weight}
      id={id}
    >
      {children}
    </NodeAsType>
  );
}
