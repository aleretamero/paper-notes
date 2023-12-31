import { createBrowserRouter } from 'react-router-dom';
import { LayoutDefault } from '../layouts/LayoutDefault';

import { Register, Login, Notes, Home, Users } from '../pages';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutDefault />,
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
        path: '/users',
        element: <PrivateRouter element={<Users />} />,
      },
    ],
  },
]);
