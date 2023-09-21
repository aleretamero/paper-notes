import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './layouts/Layout';

import { Home, Register, Login, Notes, Users } from './pages';
import { PrivateRouter } from './components/PrivateRouter';
import { PublicRouter } from './components/PublicRouter';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PublicRouter element={<Home />} />,
      },
      {
        path: '/register',
        element: <PublicRouter element={<Register />} />,
      },
      {
        path: '/login',
        element: <PublicRouter element={<Login />} />,
      },
      {
        path: '/notes',
        element: <PrivateRouter element={<Notes />} />,
      },
      {
        path: 'users',
        element: <PrivateRouter element={<Users />} />,
      },
    ],
  },
]);
