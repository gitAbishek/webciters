import styled from "@emotion/styled";
import { PlusIcon } from "~/components/Icon";
import { LinkButton } from "~/components/Button";

export const RadioWrapper = styled.div`
  display: flex;
  column-gap: var(--space-4);
  row-gap: var(--space-2);
  flex-flow: wrap;
  margin-top: var(--space-2);
`;

export const AddAddressIcon = styled(PlusIcon)`
  position: relative;
  right: 1rem;
`;

export const AddAddressButton = styled(LinkButton)`
  margin-bottom: var(--space-8);
`;
