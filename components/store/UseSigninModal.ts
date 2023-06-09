import { create } from "zustand";

interface ModalStateType {
    username : any,
    password : any,
    active : any,
    show : (value : boolean) => any,
    title : any,
    modalMessage: React.ReactNode,
    // dispatch : React.Dispatch<any>,
  } 

export const useSigninModal = create<ModalStateType>()((set) => ({
    username : "",
    password : "",
    active : false,
    title : "Log In",
    modalMessage: null,
    show : (value) => set((state) => ({
        ...state,
        active : value
    })),
}));