import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./views/Login";
import { Tasks } from "./views/Tasks";

function App() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-[#f3f3f3]">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
