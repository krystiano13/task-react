import { Frame } from "../components/Frame";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Login() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Frame>
        <form className="flex flex-col justify-center items-center gap-4">
          <Input animationDelay={0.2} type="email" />
          <Input animationDelay={0.25} type="password" />
          <Button animationDelay={0.3} type="submit">
            Log In
          </Button>
        </form>
      </Frame>
    </div>
  );
}
