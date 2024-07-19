export function errorHandler(e: Error, callback: () => void) {
  if (e.message === "401") {
    alert("Unauthorized Access");
    callback();
  } else {
    alert(e);
  }
}
