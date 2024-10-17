import React from 'react'
import ReactDOM from 'react-dom/client'
import { PrimeReactProvider } from 'primereact/api'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.tsx';
import AboutMe from './routes/AboutMe/AboutMe.tsx';
import Models from './routes/Models/Models.tsx';
import Keebs from './routes/Keebs/Keebs.tsx';
import Article from './routes/Article/Article.tsx';
import MarkdownCreate from './routes/MarkdownCreate/MarkdownCreate.tsx';
import './index.css';


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
