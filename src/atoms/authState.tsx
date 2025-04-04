import { create } from "zustand";

const API_BASE_URL = "http://localhost:3000";
interface AuthState {
  token: string | null;
  error: string | null;
  logIn: (email: string, password: string) => Promise<void>;
}

export const useAuthState = create<AuthState>((set) => ({
  token: null,
  error: null,
  logIn: async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/token`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      console.log("entre al try");

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al iniciar sesión");
      }

      const data = await response.json();
      set({ token: data.token, error: null }); // Guarda el token en el estado global
    } catch (error: any) {
      set({ token: null, error: error.message }); // Maneja errores
    }
  },
}));

// async logIn(email, password) {
//     return fetch(API_BASE_URL + "/auth/token", {
//       method: "POST",
//       headers: { "Content-type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     })
