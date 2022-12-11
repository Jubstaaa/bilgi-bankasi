import Layout from "./components/Layout";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Profile from "./pages/Profile";
import NewPost from "./pages/NewPost";
import ErrorPage from "./pages/404";
const routes = [
  {
    path: "/",
    element: <Layout />,
    auth: true,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "yeni-makale",
        element: <NewPost />,
      },
      {
        path: ":postName",
        element: <Post />,
      },
      {
        path: "profil/:username",
        element: <Profile />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
];

export default routes;
