import { Heading } from "~/components/Typography";
import { CloseIcon } from "~/components/Icon";
import { NoScroll } from "~/components/NoScroll";
import {
  ReadMoreWrapper,
  ContentWrapper,
  HeadingWrapper,
  Button,
  Overlay,
  SlideBox,
} from "./styled";
import { Table } from "../Table";
import { TableItems } from "~/pages/CmsPage/templates/ProductDetail/ProductSpecifications";

type Props = {
  title: string;
  isActive?: boolean;
  tableItems: TableItems[];
  setIsActive: (isActive: boolean) => void;
};

export function Slide({ title, tableItems, isActive, setIsActive }: Props) {
  return (
    <SlideBox readMoreIsActive={isActive}>
      <Overlay onClick={ButtonHandler} />
      <ReadMoreWrapper>
        <HeadingWrapper spacing={3} align="center" justify="space-between">
          <Heading as="h3" color="white">
            {title}
          </Heading>
          <Button onClick={ButtonHandler}>
            <CloseIcon size="md" color="white" />
          </Button>
        </HeadingWrapper>
        <ContentWrapper>
          <Table tableItems={tableItems} />
        </ContentWrapper>
        {isActive && <NoScroll />}
      </ReadMoreWrapper>
    </SlideBox>
  );

  function ButtonHandler() {
    setIsActive(false);
  }
}
