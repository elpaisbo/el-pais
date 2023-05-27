import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface RegisterStatus {
    register: Register | null;
    setNewRegister: (register: Register) => void;
}

export const useRegisterStore = create<RegisterStatus>()(
    devtools(
        persist(
            (set) => ({
                register: null,
                setNewRegister: (register: Register) =>
                    set({ register: register }),
            }),
            {
                name: "register-storage",
            }
        )
    )
);
