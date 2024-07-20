import Cookies from "js-cookie";

export async function createTask(task: string) {
  if (!Cookies.get("user")) return;
  const user = JSON.parse(Cookies.get("user") as string);

  const res = await fetch("https://timtest.timenotes.io/api/v1/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: user.accessToken,
    },
    body: JSON.stringify({ name: task }),
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
