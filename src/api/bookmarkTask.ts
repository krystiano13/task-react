import Cookies from "js-cookie";
import { createFetch } from "./helpers/createFetch";

export async function bookmarkTask(info: { id: number; bookmark: boolean }) {
  if (!Cookies.get("user")) return;
  const user = JSON.parse(Cookies.get("user") as string);

  const url = `https://timtest.timenotes.io/api/v1/tasks/${info.id}/${
    info.bookmark ? "" : "un"
  }bookmark`;

  return await createFetch(url, "POST", user.accessToken);
}
