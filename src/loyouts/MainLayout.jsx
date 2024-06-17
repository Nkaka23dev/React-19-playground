import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <div className="bg-blue-600 ">
        <nav className="py-4 max-w-5xl mx-auto">
          <h1 className="text-white text-center text-2xl">
            React 19 Playground
          </h1>
        </nav>
      </div>
      <div className="max-w-4xl mx-auto p-4">
        <Outlet />
      </div>
    </>
  );
}
