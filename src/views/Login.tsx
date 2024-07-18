import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

import { Frame } from "../components/Frame";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

import { login } from "../api/auth";

export function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: () => alert("Siadło"),
  });

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Frame>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginMutation.mutate({ email, password });
          }}
          className="animate-fade-up animate-duration-150 animate-delay-150 flex flex-col justify-center items-center gap-4"
        >
          <h2 className="font-semibold text-2xl">Log In</h2>
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
        </form>
      </Frame>
    </div>
  );
}
