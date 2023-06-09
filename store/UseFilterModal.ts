import { create } from "zustand";

interface ModalStateType {
    username : any,
    password : any,
    active : any,
    title : any,
    modalMessage: React.ReactNode,

    show : (value : boolean) => any,
    setModalMessage : (value : any) => any,
    setField : (value : any) => any,
    // dispatch : React.Dispatch<any>,
  } 

export const useFilterModal = create<ModalStateType>()((set) => ({
    username : "",
    password : "",
    active : false,
    title : "Log In",
    modalMessage: null,
    show : (value) => set((state) => ({
        ...state,
        active : value
    })),
    setModalMessage : (value) => set((state) => ({
        ...state,
        modalMessage : value
    })),
    setField : (field) => set((state) => ({
        ...state,
        [field.target.name] : field.target.value
    })),
}));