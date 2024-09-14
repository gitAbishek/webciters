import { useState } from "react";
import { Heading } from "~/components/Typography";
import { Stack } from "~/components/Stack";
import { Slide } from "./Slide";
import { TextWithinButton } from "~/components/TextBlock/styled";
import { Table } from "./Table";
import { ArrowButton } from "~/components/ArrowButton";

export type TableRowProps = {
  label: string;
  value: string;
};

export type TableItems = {
  title: string;
  items: TableRowProps[];
};

type Props = {
  title: string;
  tableItems: TableItems[];
  readMoreButtonText: string;
  readMoreIsActive?: boolean;
  className?: string;
};

export function ProductSpecifications({
  title,
  readMoreIsActive,
  readMoreButtonText,
  className,
  tableItems,
}: Props) {
  const [isReadMoreActive, setIsReadMoreActive] = useState(readMoreIsActive);

  const shorterTableItems = getShortVersion(tableItems);

  return (
    <div className={className}>
      <Heading as="h3" mb={4}>
        {title}
      </Heading>

      <Stack spacing={4} direction="column">
        <Table tableItems={shorterTableItems} />

        <ArrowButton onClick={ButtonHandler}>
          <TextWithinButton as="span" variant="sm" weight="semi-bold">
            {isReadMoreActive ? "Lees minder" : readMoreButtonText}
          </TextWithinButton>
        </ArrowButton>
      </Stack>

      <Slide
        title={title}
        tableItems={tableItems}
        isActive={isReadMoreActive}
        setIsActive={(isActive) => setIsReadMoreActive(isActive)}
      />
    </div>
  );

  function ButtonHandler() {
    setIsReadMoreActive(true);
  }
}

function getShortVersion(tableItems: TableItems[]): TableItems[] {
  return [
    {
      ...tableItems[0],
      items: tableItems[0].items.slice(0, 3),
    },
  ];
}
