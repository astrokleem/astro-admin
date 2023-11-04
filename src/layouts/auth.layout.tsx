import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import useAuthStore from '../features/auth';

const AuthLayout: FC = () => {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-row items-center justify-start w-full h-screen">
      <Sidebar />
      <main className="ml-[280px] h-screen bg-gray-100 dark:bg-gray-800 flex flex-col w-[100%]">
        {/* <Topbar /> */}
        <div className="p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
