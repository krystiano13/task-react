import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { login } from "../api/auth";
import Cookies from "js-cookie";

export function useLogin(
  setError: (error: string) => void,
  email: string,
  password: string
) {
  const loginMutation = useMutation({
    mutationFn: login,
  });
  const navigate = useNavigate();

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    loginMutation.mutateAsync({ email, password }).then((result) => {
      if (result.error) {
        setError(result.error);
      }
      if (result.accessToken) {
        Cookies.set("user", JSON.stringify(result), {
          expires: 1,
          secure: true,
        });
        navigate("/tasks");
      }
    });
  }

  return {
    mutation: loginMutation,
    submit: submit,
  };
}
