import Cookies from "js-cookie";

export async function bookmarkTask(info: { id: number; bookmark: boolean }) {
  if (!Cookies.get("user")) return;
  const user = JSON.parse(Cookies.get("user") as string);

  const url = `https://timtest.timenotes.io/api/v1/tasks/${info.id}/${
    info.bookmark ? "" : "un"
  } bookmark`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: user.accessToken,
    },
  });

  const data = await res.json();

  if (res.status === 401) {
    throw new Error("401");
  }

  if (data.error) {
    throw new Error(data.error);
  }

  return data;
}
