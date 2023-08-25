//Import page components + css

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Error from "./pages/error/Error";
import Accomodation from "./pages/accomodation/Accomodation"
import './App.css';

// Importing routing functions from React Router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
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
    path: "/accomodation/:id",
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

