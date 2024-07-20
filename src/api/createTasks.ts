import Cookies from "js-cookie";
import { createFetch } from "./helpers/createFetch";
import { checkErrors } from "./helpers/checkErrors";

export async function createTask(task: string) {
  if (!Cookies.get("user")) return;
  const user = JSON.parse(Cookies.get("user") as string);
  const url = "https://timtest.timenotes.io/api/v1/tasks";

  const res = await createFetch(url, "POST", user.accessToken, { name: task });

  const data = await res.json();

  checkErrors(res, data);

  return data;
}
