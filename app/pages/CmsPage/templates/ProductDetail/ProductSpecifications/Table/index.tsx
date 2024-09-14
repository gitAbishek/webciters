import { Heading } from "~/components/Typography";
import { TableItems } from "~/pages/CmsPage/templates/ProductDetail/ProductSpecifications";
import { TableElement } from "./styled";
import { Stack } from "~/components/Stack";

type Props = {
  tableItems: TableItems[];
};

export function Table({ tableItems }: Props) {
  return (
    <Stack spacing={6} direction="column">
      {tableItems.map((item) => (
        <div key={item.title}>
          <Heading as="h4" variant="md" weight="semi-bold" mb={2}>
            {item.title}
          </Heading>
          <TableElement>
            <tbody>
              {item.items.map((subItems) => (
                <tr key={`${subItems.label}${subItems.value}`}>
                  <td>{subItems.label}</td>
                  <td>{subItems.value}</td>
                </tr>
              ))}
            </tbody>
          </TableElement>
        </div>
      ))}
    </Stack>
  );
}
