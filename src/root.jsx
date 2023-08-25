import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import "./root.css";
import { Provider } from "react-redux";
import store from './store/store'
import Root from "./routers/start/start";
import Quiz from './routers/quiz/quiz';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    // errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "/quiz",
    //     element: <Quiz/>,
    //   },
    // ],
  },
  {
    path: "/quiz",
    element: <Quiz/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);