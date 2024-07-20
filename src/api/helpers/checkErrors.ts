export function checkErrors(res: Response, data: { error: string }) {
  if (res.status === 401) {
    throw new Error("Unauthorized Access");
  }

  if (data.error) {
    throw new Error(data.error);
  }
}
