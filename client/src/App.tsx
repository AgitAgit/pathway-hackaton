import styles from "./App.module.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Article from "./Pages/Article/Article.tsx";
import HomePage from "./Pages/HomePage/HomePage.tsx";
import UserProfile from "./Pages/UserProfile/UserProfile.tsx";
import SearchProfession from "./Pages/SearchProfession/SearchProfession.tsx";
import ErrorPage from "./Pages/ErorPage/ErorPage.tsx";
import ContactUs from "./Pages/ContactUs/ContactUs.tsx";

function App() {
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
          element: <SearchProfession />,
        },
        {
          path: "/userProfile",
          element: <UserProfile />,
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
