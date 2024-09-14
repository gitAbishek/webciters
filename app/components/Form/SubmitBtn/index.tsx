import { useIsSubmitting } from "remix-validated-form";
import { Button, ButtonProps } from "~/components/Button";

export function SubmitBtn({
  children,
  isLoading,
  form,
  ...props
}: Omit<ButtonProps, "type">) {
  const isSubmitting = useIsSubmitting(form);

  return (
    <Button
      {...props}
      isLoading={isSubmitting || isLoading}
      form={form}
      type="submit"
    >
      {children}
    </Button>
  );
}
