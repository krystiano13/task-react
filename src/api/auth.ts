export async function login() {
  const res = await fetch("http://134.209.30.203/api/v1/login", {
    method: "POST",
    headers: {
      Accept: "*/*",
    },
    body: JSON.stringify({
      email: "crystianotv@gmail.com",
      password: "crystianotv"
    }),
  });

  console.log(res);

  const data = await res.json();

  console.log(data);

  return data;
}
