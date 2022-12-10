import App from "./App";
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

  // {
  //   path: "/auth",
  //   element: <AuthLayout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <ProfileNotFound />,
  //     },
  //     {
  //       path: "login",
  //       element: <Login />,
  //     },
  //     {
  //       path: "register",
  //       element: <Register />,
  //     },
  //     {
  //       path: "password",
  //       element: <Password />,
  //     },
  //   ],
  // },
];

// const authCheck = (routes) =>
//   routes.map((route) => {
//     if (route?.auth) {
//       route.element = <PrivateRoute>{route.element}</PrivateRoute>;
//     }
//     if (route?.children) {
//       route.children = authCheck(route.children);
//     }
//     return route;
//   });

// export default authCheck(routes);

export default routes;
