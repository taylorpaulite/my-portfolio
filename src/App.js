import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root, { Home, Owns, Peau, Contact } from './routes';
import './App.css';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/owns",
          element: <Owns />,
        },
        {
          path: "/peau",
          element: <Peau />,
        },
      ]
    },
  ]);

  return (
    <main>
      <div className="App bg-grid bg-neutral-50 dark:bg-neutral-800 dark:bg-grid-dark">
        <RouterProvider router={router} />
      </div>
    </main>
  );
}

export default App;



/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
