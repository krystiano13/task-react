import { createFetch } from "./helpers/createFetch";

export async function login(value: { email: string; password: string }) {
  return await createFetch(
    "https://timtest.timenotes.io/api/v1/login",
    "POST",
    "",
    { email: value.email, password: value.password }
  );
}
