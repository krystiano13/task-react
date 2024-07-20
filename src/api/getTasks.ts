import Cookies from "js-cookie";

export async function getTasks(name: string) {
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

  if (data.error) {
    throw new Error(data.error);
  }

  return data;
}
