import { create } from 'zustand'

type Store = {
  startDate: string
  setStartDate:(date:string)=> void
  endDate: string
  setEndDate:(date:string)=> void

  chats: {
    message:string,
    data?:any,
    type:"User" | "AI"
  }[] | null
  setChat: (newChat:{
    message:string,
    data?:any,
    type:"User" | "AI"
  })=>void
}

const today = new Date();

export const useStore = create<Store>()((set) => ({
  startDate: today.toLocaleDateString(),
  setStartDate: (date) => set((state) => ({ startDate: date })),
  endDate: today.toLocaleDateString(),
  setEndDate: (date) => set((state) => ({ endDate: date })),
  chats: null, // Initialize as null to match the type definition
  setChat:(newChat) => set((state)=>({chats: state.chats ? [...state.chats, newChat] : [newChat]}))
}))


