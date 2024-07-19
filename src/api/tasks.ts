import Cookies from "js-cookie";

export async function getTasks(name:string) {
  if (!Cookies.get("user")) return;
  const user = JSON.parse(Cookies.get("user") as string);
  const res = await fetch(
    `https://timtest.timenotes.io/api/v1/tasks?name=${name}`,
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

export async function bookmarkTask(info: { id: number; bookmark: boolean }) {
  if (!Cookies.get("user")) return;
  const user = JSON.parse(Cookies.get("user") as string);

  const url = `https://timtest.timenotes.io/api/v1/tasks/${info.id}/${
    info.bookmark ? "" : "un"
  }bookmark`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: user.accessToken,
    },
  });

  const data = await res.json();
  return data;
}
