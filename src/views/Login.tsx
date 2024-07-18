import { motion } from "framer-motion";

import { Frame } from "../components/Frame";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Login() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Frame>
        <form className="animate-fade-up animate-duration-150 animate-delay-150 flex flex-col justify-center items-center gap-4">
          <h2 className="font-semibold text-2xl">Log In</h2>
          <Input type="email" />
          <Input type="password" />
          <Button type="submit">Log In</Button>
        </form>
      </Frame>
    </div>
  );
}
