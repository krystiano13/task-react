export async function login(value: { email: string; password: string }) {
  const res = await fetch("https://timtest.timenotes.io/api/v1/login", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: value.email, password: value.password }),
  });

  const data = await res.json();
  return data;
}
