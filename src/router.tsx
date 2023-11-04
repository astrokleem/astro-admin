import { createBrowserRouter } from 'react-router-dom';

import AuthLayout from '@/layouts/auth.layout';
import Mainlayout from '@/layouts/main.layout';
import Dummy from '@/pages/dummy';
import Login from '@/pages/Login';

import RootLayout from './layouts/root.layout';
import AstrologerApplications from './pages/Customers/AstrologerApplications';
import Astrologers from './pages/Customers/Astrologers';
import Users from './pages/Customers/Users';
import ErrorPage from './pages/error';
import Transactions from './pages/Sales/Transactions';
import Support from './pages/Support';
import TicketDetails from './pages/Support/TicketDetails';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Mainlayout />,
        children: [{ path: "/", element: <Login /> }],
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dummy />,
          },
          {
            path: "/support-tickets",
            element: <Support />,
            children: [
              {
                path: ":id",
                element: <TicketDetails />,
              },
            ],
          },
          {
            path: "/marketing",
            element: <Dummy />,
          },
          {
            path: "/orders",
            element: <Dummy />,
          },
          {
            path: "/transactions",
            element: <Transactions />,
          },
          {
            path: "/users",
            element: <Users />,
          },
          {
            path: "/astrologers",
            element: <Astrologers />,
          },
          {
            path: "/astrologer-applications",
            element: <AstrologerApplications />,
          },
          {
            path: "/reports",
            element: <Dummy />,
          },
          {
            path: "/settings",
            element: <Dummy />,
          },
        ],
      },
    ],
  },
]);

export default router;
