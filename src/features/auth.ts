import { create } from 'zustand';

interface AuthState {
  token: string | null;
  user: string | any | null;
  isAuthenticated: boolean;
  setUser: (user: string) => void;
  setToken: (token: string | null) => void;
  logOut: () => void;
  fetchFromLocalStorage: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  isAuthenticated: false,
  setUser: (user: string) => {
    localStorage.setItem("user", user);
    set(() => ({ user }));
  },
  setToken: (token) => {
    localStorage.setItem("token", token as string);
    set(() => ({ token }));
  },
  logOut: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set(() => ({ token: null, user: null, isAuthenticated: false }));
  },
  fetchFromLocalStorage: () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token && user) {
      set(() => ({ token, user: JSON.parse(user), isAuthenticated: true }));
    }
  },
}));

export default useAuthStore;
