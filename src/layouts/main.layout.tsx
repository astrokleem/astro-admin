import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import useAuthStore from '../features/auth';

interface MainlayoutProps {}

const Mainlayout: FC<MainlayoutProps> = () => {
  const user = useAuthStore((state) => state.user);

  if (user) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default Mainlayout;
