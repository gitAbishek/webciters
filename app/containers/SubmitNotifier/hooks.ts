import { useEffect, useState } from "react";
import { useActionData, useNavigate, useTransition } from "@remix-run/react";
import { toast } from "react-hot-toast";
import { extractMessage, MessageSchema } from "~/utils/responses";
import { Fetcher } from "~/utils/types";

type States = "idle" | "submitting" | "loading";

export function useActionSubmitNotifier(navigateOnSuccess?: string) {
  const navigate = useNavigate();
  const { state } = useTransition();
  const data = useActionData<unknown>();

  useSubmitNotifier({
    state,
    data,
    onSuccess: navigateOnSuccess
      ? () => navigate(navigateOnSuccess)
      : undefined,
  });
}

export function useFetcherNotifier(fetcher: Fetcher, onSuccess?: () => void) {
  const { state, data } = fetcher;

  useSubmitNotifier({ state, data, onSuccess });
}

type UseSubmitNotifier = {
  state: States;
  data: unknown;
  onSuccess?: () => void;
  withLoadingToaster?: boolean;
};

export function useSubmitNotifier({
  state,
  data,
  onSuccess,
  withLoadingToaster = true,
}: UseSubmitNotifier) {
  const isSubmitting = state === "submitting";
  const isIdle = state === "idle";

  const [message, setMessage] = useState<MessageSchema>();

  useEffect(() => {
    if (!isIdle) return;

    setMessage(extractMessage(data));
  }, [isIdle, setMessage, data]);

  useEffect(() => {
    if (!isSubmitting) return undefined;
    setMessage(undefined);

    const loadingId = withLoadingToaster
      ? toast.loading("Even wachten...")
      : undefined;

    return () => {
      toast.remove(loadingId);
    };
  }, [isSubmitting, withLoadingToaster]);

  useEffect(() => {
    if (!message) return;

    if ("error" in message) {
      toast.error(message.error, {
        duration: Infinity,
        position: "top-center",
      });
    }

    if ("success" in message) {
      if (typeof message.success === "string") {
        toast.success(message.success, {
          duration: 10000,
        });
      }

      if (onSuccess) {
        onSuccess();
      }
    }

    setMessage(undefined);
  }, [message, onSuccess]);
}
