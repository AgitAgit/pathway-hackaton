import styles from "./App.module.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProfessionInterFace } from "./Components/GridProfessions/GridProfessions.tsx";

import Article from "./Pages/Article/Article.tsx";
import HomePage from "./Pages/HomePage/HomePage.tsx";
import UserProfile from "./Pages/UserProfile/UserProfile.tsx";
import SearchProfession from "./Pages/SearchProfession/SearchProfession.tsx";
import ErrorPage from "./Pages/ErorPage/ErorPage.tsx";
import ContactUs from "./Pages/ContactUs/ContactUs.tsx";
import Categories from "./Pages/Categories/Categories.tsx";
import Profession from "./Pages/Profession/Profession.tsx";
import { useState } from "react";

function App() {
  const [profession, setProfession] = useState({});

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Article />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/searchProfession",
          element: <SearchProfession setProfession={setProfession} />,
        },
        {
          path: "/userProfile",
          element: <UserProfile />,
        },
        {
          path: "/categories",
          element: <Categories />,
        },
        {
          path: "/profession/:name",
          element: <Profession profession={profession} />,
        },
      ],
    },
    // {
    //   path: "/login",
    //   element: <LogIn isLogIn={isLogIn} setIsLogIn={setIsLogIn} />,
    // },
    // {
    //   path: "/signup",
    //   element: <SignUp />,
    // },
    {
      path: "/error",
      element: <ErrorPage />,
    },
    {
      path: "/contactUs",
      element: <ContactUs />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
