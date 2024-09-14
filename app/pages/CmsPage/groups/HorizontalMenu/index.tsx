import { Fragment } from "react";
import { HorizontalMenuGroup } from "~/schema/cmsGroups";
import { FlexContainer, LinkNormal, NoMargin } from "./styled";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";
import { getAllMenuItems } from "~/containers/TopNav/hooks";

type Props = {
  data: HorizontalMenuGroup;
};

export function HorizontalMenu({ data }: Props) {
  return (
    <FlexContainer>
      {data.elements.map((element) => (
        <Fragment key={element.id}>
          {getAllMenuItems(data.elements[0]).length > 0 &&
            getAllMenuItems(data.elements[0]).map((item) => {
              if (!item.url) return null;
              return (
                <LinkNormal key={item.id} to={item.url}>
                  {item.name}
                </LinkNormal>
              );
            })}
          {element.markdown_content && (
            <NoMargin>
              <MarkdownRenderer content={element.markdown_content} />
            </NoMargin>
          )}
        </Fragment>
      ))}
    </FlexContainer>
  );
}
