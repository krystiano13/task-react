import Cookies from "js-cookie";

export async function getTasks() {
  if (!Cookies.get("user")) return;
  const user = JSON.parse(Cookies.get("user") as string);
  const res = await fetch(
    "https://timtest.timenotes.io/api/v1/tasks?page=1&per_page=10",
    {
      method: "GET",
      headers: {
        Authorization: user.accessToken,
      },
    }
  );

  const data = await res.json();
  console.log(data);
  return data;
}

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
  return data;
}