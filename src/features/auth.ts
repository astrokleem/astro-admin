import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface AuthState {
  token: string | null;
  user: string | any | null;
  isAuthenticated: boolean;
  setUser: (user: string) => void;
  setToken: (token: string | null) => void;
  logOut: () => void;
  fetchFromLocalStorage: () => void;
}

// (set: any) => ({
//   token: null,
//   user: null,
//   isAuthenticated: false,
//   setUser: (user: string) => {
//     set(() => ({ user }));
//   },
//   setToken: (token) => {
//     set(() => ({ token }));
//   },
//   logOut: () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     set(() => ({ token: null, user: null, isAuthenticated: false }));
//   },
//   fetchFromLocalStorage: () => {
//     const token = localStorage.getItem("token");
//     const user = localStorage.getItem("user");
//     if (token && user) {
//       set(() => ({ token, user: JSON.parse(user), isAuthenticated: true }));
//     }
//   },
// }),

const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        token: null,
        user: null,
        isAuthenticated: false,
        setUser: (user: string) => {
          set({ user });
        },
        setToken: (token) => {
          set({
            token,
            isAuthenticated: true,
          });
        },
        logOut: () => {
          set({ token: null, user: null, isAuthenticated: false });
        },
        fetchFromLocalStorage: () => {
          const token = localStorage.getItem("token");
          const user = localStorage.getItem("user");
          if (token && user) {
            set(() => ({
              token,
              user: JSON.parse(user),
              isAuthenticated: true,
            }));
          }
        },
      }),
      {
        name: "auth-storage",
        getStorage: () => localStorage,
      }
    )
  )
);
export const token = useAuthStore.getState().token;

export default useAuthStore;
