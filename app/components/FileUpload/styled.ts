import styled from "@emotion/styled";
import { Button } from "~/components/Button";
import { Stack } from "~/components/Stack";
import { mq } from "~/utils/style";
import { Text } from "~/components/Typography";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  width: 100%;
`;

export const FileUploadWrapper = styled.div`
  position: relative;
  width: auto;
`;

export const Input = styled.input`
  display: none;
`;

export const FileUploadButton = styled(Button)`
  display: flex;
  gap: var(--space-2);
`;

export const CloseButton = styled(Button)`
  padding: var(--space-1);
  border: none;
  position: absolute;
  z-index: 1;
  top: -1.2rem;
  right: -1.2rem;
  background-color: var(--color-error);
`;

export const StackFw = styled(Stack)`
  width: 100%;
  max-width: 100%;
  position: relative;
`;

export const FilesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-9);
  background-color: var(--color-gray-10);
  padding: var(--space-6);
  border-radius: var(--border-radius);

  ${mq.sm} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  ${mq.md} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const StackFile = styled(Stack)`
  position: relative;
`;

export const UploadImage = styled.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
  object-position: center;
  flex: auto;
  max-width: 100%;
  border-radius: 0.8rem;

  ${mq.sm} {
    height: 125px;
  }

  ${mq.md} {
    height: 125px;
  }
`;

export const TextEllipses = styled(Text)`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  width: 100%;
`;

export const EllipseWrapper = styled.div`
  display: grid;
  overflow: hidden;
`;
