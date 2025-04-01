import { create } from "zustand";

const useAppStore = create((set) => ({
    data: {
        userData: {
            accessToken: "",
            refreshToken: "",
            userInfo: {
                id: null,
                name: "",
                email: "",
                role: "",
                phone: "",
                address: "",
            },
        },
        setUserData: (data: any) => {
            set({ userData: data });
        },
        clearUserData: () => {
            set({
                userData: {
                    accessToken: "",
                    refreshToken: "",
                    userInfo: {
                        id: null,
                        name: "",
                        email: "",
                        role: "",
                        phone: "",
                        address: "",
                    }
                },
            });
        },
    },
}));

export default useAppStore;
