import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigate } from "react-router";

import { Frame } from "../components/Frame";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { LoadingSpinner } from "../components/LoadingSpinner";

import { login } from "../api/auth";

export function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: login,
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    loginMutation.mutateAsync({ email, password }).then((result) => {
      if (result.error) {
        setError(result.error);
      }
      if (result.accessToken) {
        navigate("/tasks");
      }
    });
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Frame>
        <form
          onSubmit={handleSubmit}
          className="animate-fade-up animate-duration-150 animate-delay-150 flex flex-col justify-center items-center gap-4"
        >
          <h2 className="font-semibold text-2xl">Log In</h2>
          {loginMutation.isPending && <LoadingSpinner />}
          {(loginMutation.isIdle || loginMutation.isSuccess) && (
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
