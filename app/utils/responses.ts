import { z } from "zod";

export function methodNotAllowed() {
  return new Response(null, { status: 405 });
}

export function unprocessableEntity(message?: string) {
  return new Response(message, { status: 422 });
}

export function notFound(message = "Not Found") {
  return new Response(message, {
    status: 404,
  });
}

export const messageSchema = z
  .object({
    error: z.string(),
  })
  .or(
    z.object({
      success: z.string().nullable(),
    })
  );

export type MessageSchema = z.infer<typeof messageSchema>;

export function extractMessage(maybeMessage: unknown) {
  const result = messageSchema.safeParse(maybeMessage);

  if (result.success) {
    return result.data;
  }

  return undefined;
}
