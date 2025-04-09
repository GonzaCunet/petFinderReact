import { create } from "zustand";

const API_BASE_URL = "http://localhost:3000";
interface AuthState {
  token: string | null;
  error: string | null;
  email: string | null;
  isLoading: boolean;
  logIn: (email: string, password: string) => Promise<void>;
  setEmail: (email: string) => void;
}

export const useAuthState = create<AuthState>((set) => ({
  token: null,
  error: null,
  email: null,
  isLoading: true,
  logIn: async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/token`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al iniciar sesión");
      }

      const data = await response.json();
      set({ token: data.token, error: null, email, isLoading: false });
    } catch (error: any) {
      set({ token: null, error: error.message, isLoading: false });
    }
  },
  setEmail: (email) => set({ email }),
}));
