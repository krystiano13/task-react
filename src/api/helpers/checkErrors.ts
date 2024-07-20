export function checkErrors(res: Response, data: { error: string }) {
  if (res.status === 401) {
    throw new Error("401");
  }

  if (data.error) {
    throw new Error(data.error);
  }
}
