export async function createFetch(
  url: string,
  method: "GET" | "POST",
  token: string,
  body?: { name: string } | { email: string; password: string }
) {
  return await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(body),
  });
}
