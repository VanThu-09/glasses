import { create } from "zustand";

const useUserStore = create((set) => ({
  user: {
    email: "",
    phone: "",
    name: "",
    address: "",
    avatar: "/img/avt.png",
  },
  setUser: (userData: any) => set({ user: userData }),
  logout: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    set({ user: { email: "", phone: "", name: "", address: "", avatar: "/img/avt.png" } });
  },
}));

export default useUserStore;
