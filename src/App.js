//Routes

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Error from "./pages/error/Error";
import Accomodation from "./pages/accomodation/Accomodation"
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/kasa",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/accomodation",
    element: <Accomodation />,
  }

])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;

