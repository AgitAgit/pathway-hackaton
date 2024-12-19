import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Article from "./Pages/Article/Article.tsx";
import HomePage from "./Pages/HomePage/HomePage.tsx";
import UserProfile from "./Pages/UserProfile/UserProfile.tsx";
import SearchProfession from "./Pages/SearchProfession/SearchProfession.tsx";
import ErrorPage from "./Pages/ErorPage/ErorPage.tsx";
import ContactUs from "./Pages/ContactUs/ContactUs.tsx";
import Categories from "./Pages/Categories/Categories.tsx";
import Profession from "./Pages/Profession/Profession.tsx";
import Favorite from "./Pages/Favorite/Favorite.tsx";
import Forum from "./Pages/Forum/Forum.tsx";
import Login from "./Pages/Log-in/LogIn.tsx";
import SignUp from "./Pages/Sign-up/SignUp.tsx";
import ChangePassword from "./Pages/ChangePassword/ChangePassword.tsx";

function App() {
  const [profession, setProfession] = useState({});
  const [categoryName, setCategoryName] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Article isLogin={isLogin} setIsLogin={setIsLogin} />,
      children: [
        {
          path: "/",
          element: <HomePage setCategoryName={setCategoryName} />,
        },
        {
          path: "/searchProfession",
          element: (
            <SearchProfession
              categoryName={categoryName}
              setProfession={setProfession}
            />
          ),
        },
        {
          path: "/categories",
          element: <Categories setCategoryName={setCategoryName} />,
        },
        {
          path: "/profession/:name",
          element: <Profession profession={profession} />,
        },
        {
          path: "/favorite",
          element: <Favorite setProfession={setProfession} />,
        },
        {
          path: "/forum",
          element: <Forum />,
        },
        {
          path: "/userProfile",
          element: <UserProfile />,
        },
        {
          path: "/changePassword",
          element: <ChangePassword />,
        },
        {
          path: "/login",
          element: <Login isLogin={isLogin} setIsLogin={setIsLogin} />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/error",
          element: <ErrorPage />,
        },
        {
          path: "/contactUs",
          element: <ContactUs />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
