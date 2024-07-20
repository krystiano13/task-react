import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

import { Frame } from "../components/Frame";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { useLogin } from "../hooks/useLogin";

export function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get("user")) {
      navigate("/tasks");
    }
  }, []);

  const login = useLogin((error: string) => setError(error), email, password);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Frame>
        <form
          onSubmit={login.submit}
          className="animate-fade-up animate-duration-150 animate-delay-150 flex flex-col justify-center items-center gap-4"
        >
          <h2 className="font-semibold text-2xl">Log In</h2>
          {login.mutation.isPending && <LoadingSpinner />}
          {(login.mutation.isIdle || login.mutation.isSuccess || login.mutation.isError) && (
            <>
              <Input
                changeEmail={(value: string) => setEmail(value)}
                changePassword={(value: string) => setPassword(value)}
                type="email"
              />
              <Input
                changeEmail={(value: string) => setEmail(value)}
                changePassword={(value: string) => setPassword(value)}
                type="password"
              />
              <Button type="submit">Log In</Button>
              {error && (
                <p className="text-red-500 text-center text-lg font-medium">
                  {error}
                </p>
              )}
            </>
          )}
        </form>
      </Frame>
    </div>
  );
}
