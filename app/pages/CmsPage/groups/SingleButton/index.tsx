import { Container } from "~/components/Container";
import { LinkButton } from "~/components/Button";
import { SingleButtonGroup } from "~/schema/cmsGroups";
import { StackWrapper } from "~/pages/CmsPage/groups/SingleButton/styled";
import { SingleButtonElement } from "~/schema/cmsElements";

type Props = {
  data: SingleButtonGroup;
};

export function SingleButton({ data }: Props) {
  return (
    <Container>
      <StackWrapper justify="center" align="center" gap={4} mt={8} mb={8}>
        {data.elements.map((item) => (
          <LinkButton
            key={item.urls.toString()}
            variant={getVariant(item)}
            size={getSize(item)}
            to={item.urls.url}
          >
            {item.urls.name}
          </LinkButton>
        ))}
      </StackWrapper>
    </Container>
  );

  function getVariant(item: SingleButtonElement) {
    const variant = item.custom_fields.find((option) => {
      if (option.key === "variant") {
        return option;
      }
      return null;
    });

    return variant?.key === "variant" ? variant.value : "primary";
  }

  function getSize(item: SingleButtonElement) {
    const size = item.custom_fields.find((option) => {
      if (option.key === "size") {
        return option;
      }
      return null;
    });

    return size?.key === "size" ? size.value : "sm";
  }
}
