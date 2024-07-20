import Cookies from "js-cookie";
import { createFetch } from "./helpers/createFetch";

export async function getTasks(name: string) {
  if (!Cookies.get("user")) return;
  const user = JSON.parse(Cookies.get("user") as string);
  const url = `https://timtest.timenotes.io/api/v1/tasks?name=${name}`;

  return await createFetch(url, "GET", user.accessToken);
}
