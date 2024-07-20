import Cookies from "js-cookie";
import { createFetch } from "./helpers/createFetch";

export async function createTask(task: string) {
  if (!Cookies.get("user")) return;
  const user = JSON.parse(Cookies.get("user") as string);
  const url = "https://timtest.timenotes.io/api/v1/tasks";

  return await createFetch(url, "POST", user.accessToken, { name: task });
}
