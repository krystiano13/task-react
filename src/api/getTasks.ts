import Cookies from "js-cookie";
import { createFetch } from "./helpers/createFetch";
import { checkErrors } from "./helpers/checkErrors";

export async function getTasks(name: string) {
  if (!Cookies.get("user")) return;
  const user = JSON.parse(Cookies.get("user") as string);
  const url = `https://timtest.timenotes.io/api/v1/tasks?name=${name}`;

  const res = await createFetch(url, "GET", user.accessToken);

  const data = await res.json();

  checkErrors(res, data);

  return data;
}
