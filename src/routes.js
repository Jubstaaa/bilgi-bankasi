import App from "./App";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Profile from "./pages/Profile";
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
        path: ":postName",
        element: <Post />,
      },
      {
        path: "profile/:username",
        element: <Profile />,
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
  {
    path: "*",
    element: <></>,
  },
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
