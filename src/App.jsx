import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import Navbar from "./components/navbar/Navabr";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.scss";

const Layout = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
