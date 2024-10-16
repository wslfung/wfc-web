import React from 'react'
import ReactDOM from 'react-dom/client'
import { PrimeReactProvider } from 'primereact/api'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.tsx';
import AboutMe from './routes/aboutMe/AboutMe.tsx';
import Models from './routes/models/Models.tsx';
import Keebs from './routes/keebs/Keebs.tsx';
import Article from './routes/article/Article.tsx';
import './index.css'
import MarkdownCreate from './routes/markdownCreate/markdownCreate.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // children: [
    // ],
  },
  {
    path: "/me",
    element: <AboutMe />
  },
  {
    path: "/models",
    element: <Models />,
  },
  {
    path: "/keebs",
    element: <Keebs />,
  },
  {
    path: "/keebs/:articleId",
    element: <Article />
  },
  {
    path: "/models/:articleId",
    element: <Article />
  },
  {
    path: "/markdownCreate",
    element: <MarkdownCreate />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </React.StrictMode>,
)
