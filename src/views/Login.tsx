import { motion } from "framer-motion";

import { Frame } from "../components/Frame";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Login() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Frame>
        <motion.form
          initial={{ scale: 0 }}
          transition={{
            type: "spring",
            bounce: 0.3,
            delay: 0.15,
            duration: 0.35,
          }}
          animate={{ scale: [0, 1] }}
          className="flex flex-col justify-center items-center gap-4"
        >
          <Input type="email" />
          <Input type="password" />
          <Button type="submit">Log In</Button>
        </motion.form>
      </Frame>
    </div>
  );
}
