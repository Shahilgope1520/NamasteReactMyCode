import React, { lazy, Suspense, useEffect, useState } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./Utils/UserContext";

// Chunking
// Code Splitting
// Dynamic Bundling
// lazy Loading
// on demand loading
// dynamix imoprt

const Grocery = lazy(() => import("./Components/Grocery"));

const About = lazy(() => import("./Components/About"));

const AppLayout = () => {
  const [user, setUser] = useState("default");
  useEffect(() => {
    const data = { name: "shahil" };
    setUser(data?.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: user, setUser}}>
      {/* "shahil" */}
      <div className="app">
        <UserContext.Provider value={{ loggedInUser: "Elon" }}>
          {/* Elon  */}
          <Header />
        </UserContext.Provider>
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
export default function App() {
  return <RouterProvider router={appRouter} />;
}
