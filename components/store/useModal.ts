import { create } from "zustand";

interface ModalStateType {
    username : any,
    password : any,
    active : any,
    showLogin : (value : boolean) => any,
    title : any,
    modalMessage: React.ReactNode,
    // dispatch : React.Dispatch<any>,
  } 

export const useModal = create<ModalStateType>()((set) => ({
    username : "",
    password : "",
    active : false,
    title : "Log In",
    modalMessage: null,
    showLogin : (value) => set((state) => ({
        ...state,
        active : value
    })),
}));