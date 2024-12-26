import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Layouts/Home/Home";
import AllQueries from "../Layouts/AllQueries/AllQueries";
import MyQueries from "../Layouts/MyQueries/MyQueries";
import Recommendations from "../Layouts/Recommendations/Recommendations";
import MyRecommendations from "../Layouts/MyRecommendations/MyRecommendations";
import AddQuery from "../Layouts/AddQuery/AddQuery";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import QueryDetails from "../Pages/QueryDetails/QueryDetails";
import UpdateQuery from "../Pages/UpdateQuery/UpdateQuery";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/queries",
        element: <AllQueries></AllQueries>,
      },
      {
        path: "/myQueries",
        element: (
          <PrivateRoute>
            <MyQueries></MyQueries>
          </PrivateRoute>
        ),
      },
      {
        path: "/recommendation",
        element: <Recommendations></Recommendations>,
      },
      {
        path: "/myRecommendation",
        element: <MyRecommendations></MyRecommendations>,
      },
      {
        path: "/addQuery",
        element: (
          <PrivateRoute>
            <AddQuery></AddQuery>
          </PrivateRoute>
        ),
      },
      {
        path: "/queryDetails/:id",
        element: <QueryDetails></QueryDetails>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/singleQuery/${params.id}`),
      },
      {
        path: "/updateQuery/:id",
        element: <UpdateQuery></UpdateQuery>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/singleQuery/${params.id}`),
      },
    ],
  },
]);

export default router;
