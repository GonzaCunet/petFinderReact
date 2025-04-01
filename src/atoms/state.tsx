import { create } from "zustand";

const apiBaseUrl = "http://localhost:3000";

interface PetsNear {
  pets: [];
  loading: boolean;
  error: string | null;
  fetchPetsNear: (last_lat: any, last_lng: any) => Promise<void>;
}

export const usePetsNears = create<PetsNear>((set) => ({
  pets: [],
  loading: false,
  error: null,

  fetchPetsNear: async (last_lat, last_lng) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        apiBaseUrl +
          "/pets-cerca-de?" +
          "lat=" +
          last_lat +
          "&" +
          "lng=" +
          last_lng,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) throw new Error("Failed to fetch users");
      const data = await response.json();
      console.log(data);

      set({ pets: data, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
}));
