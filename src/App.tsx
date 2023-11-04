import { FC, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import Manager from './contexts/manager';
import useAuthStore from './features/auth';
import router from './router';

const App: FC = () => {
  const notification_permission = Notification.permission;
  const fetchUserFromLocalStorage = useAuthStore(
    (state) => state.fetchFromLocalStorage
  );

  useEffect(() => {
    fetchUserFromLocalStorage();
  }, [fetchUserFromLocalStorage]);

  useEffect(() => {
    if (!("Notification" in window)) {
      // Check if the browser supports notifications
      console.log("This browser does not support desktop notification");
    } else if (notification_permission !== "denied") {
      // We need to ask the user for permission
      Notification.requestPermission().then((permission) => {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          console.log("NOTIFICATION PERMISSION GRANTED");
        }
      });
    } else {
      console.log(notification_permission);
    }
  }, [notification_permission]);

  return (
    <Manager>
      <RouterProvider router={router} />
    </Manager>
  );
};

export default App;
