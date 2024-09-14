import { withZod } from "@remix-validated-form/with-zod";
import { RefObject, useEffect, useState } from "react";
import { Stack } from "~/components/Stack";
import { formInputSchema } from "~/containers/ServiceRequestForm/schema";
import { ROUTE_SERVICE_REQUEST } from "~/utils/constants";
import { Fetcher } from "~/utils/types";
import { SubmitBtn } from "~/components/Form/SubmitBtn";
import { getTypedFields } from "~/components/Form";
import { ServiceTypes } from "~/schema/serviceTypes";
import { ValidatedForm } from "./styled";
import { SelectForm } from "~/components/SelectForm";
import { FileUpload } from "~/components/FileUpload";
import { useFetcherNotifier } from "~/containers/SubmitNotifier/hooks";

type Props = {
  serviceTypes: ServiceTypes[];
  fetcher: Fetcher;
  formRef: RefObject<HTMLFormElement>;
};

const validator = withZod(formInputSchema);
const { TextField, Textarea } = getTypedFields(formInputSchema);

// File upload settings
const allowedFileExtensions = ["jpg", "jpeg", "png"]; // jpg,jpeg,png
const maxAmountOfFiles = 10; // 10 Files
const maxFileSize = 10000000; // 10MB

export function ServiceRequestForm({ serviceTypes, fetcher, formRef }: Props) {
  const serviceTypeOptions = serviceTypes.map((serviceType) => ({
    name: serviceType.description,
    value: `${serviceType.id}`,
  }));

  const [selectedQuestionType, setSelectedQuestionType] = useState(
    serviceTypeOptions[0]
  );

  const [files, setFiles] = useState<File[]>([]);
  const [filesBase64, setFilesBase64] = useState<string[]>([]);

  useEffect(() => {
    if (files.length > 0) {
      toBase64Handler(files).then((result: string[]) => setFilesBase64(result));
    }
  }, [files]);

  useFetcherNotifier(fetcher, () => {
    formRef.current?.reset();
    setFiles([]);
  });

  return (
    <ValidatedForm
      validator={validator}
      method="post"
      fetcher={fetcher}
      action={ROUTE_SERVICE_REQUEST}
      formRef={formRef}
    >
      <Stack direction="column" gap={4} mb={13}>
        <TextField label="Naam" name="name" />
        <TextField label="E-mail" name="email" />
        <TextField label="Telefoonnummer" name="phone" />
        <TextField label="Ordernummer" name="order_number" />
        <SelectForm
          name="service_type"
          label="Kies een soort vraag"
          options={serviceTypeOptions}
          selectedItem={selectedQuestionType}
          onSelectedItemChange={({ selectedItem }) => {
            if (!selectedItem) return;
            setSelectedQuestionType(selectedItem);
          }}
        />
        <TextField label="Onderwerp" name="service_subject" />
        <Textarea label="Vraag" name="service_content" />
        {filesBase64 &&
          filesBase64.map((fileAsBase64, index) => (
            <input
              type="hidden"
              key={`${fileAsBase64 + index}`}
              name="files"
              value={fileAsBase64}
            />
          ))}
        <FileUpload
          files={files}
          setFiles={(newFiles) => setFiles(newFiles)}
          maxAmountOfFiles={maxAmountOfFiles}
          allowedFileExtensions={allowedFileExtensions}
          maxFileSize={maxFileSize}
        />
        <SubmitBtn variant="primary">Verstuur</SubmitBtn>
      </Stack>
    </ValidatedForm>
  );
}

async function toBase64(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && typeof e.target.result === "string") {
        resolve(e.target.result);
      } else {
        reject(e);
      }
    };
    reader.readAsDataURL(file);
  });
}

async function toBase64Handler(files: File[]) {
  return Promise.all(files.map(toBase64));
}
