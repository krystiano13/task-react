import { checkErrors } from "./checkErrors";

export async function createFetch(
  url: string,
  method: "GET" | "POST",
  token: string,
  body?: { name: string } | { email: string; password: string }
) {
  const res = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  if (token) checkErrors(res, data);
  else if (data.error) {
    throw new Error(data.error);
  }

  return data;
}
