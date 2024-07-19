import { Button } from "../components/Button";
import { NavLink } from "react-router-dom";

export function NotFound() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col gap-5 justify-center items-center">
      <div className="animate-fade-up animate-duration-200 flex flex-col gap-5 justify-center items-center">
        <h1 className="font-medium text-4xl text-center">404 - Page Not Found</h1>
        <NavLink to="/">
          <Button type="button">Go Back</Button>
        </NavLink>
      </div>
    </div>
  );
}
