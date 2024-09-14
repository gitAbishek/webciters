import { toast, Toaster as ToasterBase, ToastType } from "react-hot-toast";
import { CloseBtn, Content, Main } from "./styled";
import { CheckIcon, CloseIcon, InfoIcon } from "~/components/Icon";
import { Colors } from "~/utils/style";
import { LoadingIndicator } from "~/components/LoadingIndicator";

// This component should be rendered where toasters in the html should be rendered
export function Toaster() {
  return (
    <ToasterBase position="bottom-center">
      {(t) => (
        <Main color={getColor(t.type)}>
          {getIcon(t.type)}
          <Content>
            {typeof t.message === "function" ? t.message(t) : t.message}
          </Content>
          {t.type !== "loading" && (
            <CloseBtn onClick={() => toast.remove(t.id)}>
              <CloseIcon size="md" />
            </CloseBtn>
          )}
        </Main>
      )}
    </ToasterBase>
  );
}

function getColor(type: ToastType): Colors {
  if (type === "loading") return "secondary";
  if (type === "success") return "green";

  return "primary";
}

function getIcon(type: ToastType) {
  if (type === "loading") {
    return <LoadingIndicator />;
  }

  if (type === "success") {
    return <CheckIcon size="md" color="green" />;
  }

  return <InfoIcon size="md" color="primary" />;
}
