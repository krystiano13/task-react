import { createFetch } from "./helpers/createFetch";

export async function login(value: { email: string; password: string }) {
  const res = await createFetch(
    "https://timtest.timenotes.io/api/v1/login",
    "POST",
    "",
    { email: value.email, password: value.password }
  );

  const data = await res.json();
  return data;
}
