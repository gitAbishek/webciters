import { useMatch } from "react-router";
import { LinkProps } from "~/components/Link";
import { LinkArrowButton } from "~/components/ArrowButton";

type Props = LinkProps;

export function ConditionalLinkArrowBtn({ to, label }: Props) {
  const isAlreadyOnPage = useMatch(to);

  if (isAlreadyOnPage) return null;

  return (
    <LinkArrowButton color="primary" to={to}>
      {label}
    </LinkArrowButton>
  );
}
