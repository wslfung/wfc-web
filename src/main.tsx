import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx';
import AboutMe from './routes/aboutMe/AboutMe.tsx';
import Models from './routes/models/Models.tsx';
import Keebs from './routes/keebs/Keebs.tsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
    // loader: rootLoader,
    // children: [
    //   {
    //     path: "team",
    //     element: <Team />,
    //     loader: teamLoader,
    //   },
    // ],
  },
  {
    path: "/me",
    element: <AboutMe />
  },
  {
    path: "/models",
    element: <Models />
  },
  {
    path: "/keebs",
    element: <Keebs />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
