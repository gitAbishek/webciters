import { ReactNode } from "react";
import { LinkWrapper, Root, Data, RemoveAction, BottomLink } from "./styled";
import { Heading, Text } from "~/components/Typography";
import { LinkProps } from "~/components/Link";
import { BasketIcon, BinIcon, EditIcon } from "~/components/Icon";
import { LinkArrowButton } from "~/components/ArrowButton";

type Props = {
  children: ReactNode;
  title?: string;
  editLink?: LinkProps;
  goToLink?: LinkProps;
  paymentLink?: LinkProps;
  onRemove?: () => void;
};

export function EditableDataBox({
  children,
  title,
  editLink,
  goToLink,
  onRemove,
  paymentLink,
}: Props) {
  return (
    <Root>
      <Data>
        {title && (
          <Heading mb={2} as="h4" variant="md" weight="semi-bold">
            {title}
          </Heading>
        )}
        {children}
      </Data>
      {(goToLink || editLink || onRemove) && (
        <LinkWrapper>
          {goToLink && (
            <LinkArrowButton to={goToLink.to} color="primary">
              {goToLink.label}
            </LinkArrowButton>
          )}
          {editLink && (
            <BottomLink to={editLink.to}>
              <EditIcon size="md" />
              <Text variant="sm" weight="medium">
                {editLink.label}
              </Text>
            </BottomLink>
          )}
          {onRemove && (
            <RemoveAction onClick={onRemove} type="button">
              <BinIcon size="md" />
              <Text variant="sm" weight="medium">
                Verwijder adres
              </Text>
            </RemoveAction>
          )}
          {paymentLink && (
            <BottomLink to={paymentLink.to}>
              <BasketIcon size="md" />
              <Text variant="sm" weight="medium">
                {paymentLink.label}
              </Text>
            </BottomLink>
          )}
        </LinkWrapper>
      )}
    </Root>
  );
}
