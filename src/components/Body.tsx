import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LoginPage from "./LoginPage";
import Navbar from "./Navbar";

function Layout({ children }: any) {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Navbar />
      {children || <Outlet />}
    </div>
  );
}

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <LoginPage /> },
    {
      path: "/home",
      element: (
        <div className="h-screen w-screen">
          <Navbar />
        </div>
      ),
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
