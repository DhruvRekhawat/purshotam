import { create } from 'zustand'

type Store = {
  startDate: string
  setStartDate:(date:string)=> void
  endDate: string
  setEndDate:(date:string)=> void

  searchBarData:{
EntryDate: string,
ItemName: string,
CategoryName: string,
SizeDesp: string,
Thickness: string,
Width: string,
Grade: string,
MAKE: string,
GodownName: string,
StockInQTYMT: number,
StockOutQTYMT: number
  }[] | null
setSearchBarData:(data:{
EntryDate: string,
ItemName: string,
CategoryName: string,
SizeDesp: string,
Thickness: string,
Width: string,
Grade: string,
MAKE: string,
GodownName: string,
StockInQTYMT: number,
StockOutQTYMT: number
  }[]) => void

  chats: {
    message?:string,
    data?:any[],
    type:"User" | "AI"
    page?: number,
    question?: string,
    url:string
  }[] | null
  setChat: (newChat:{
    message?:string,
    data?:any[],
    type:"User" | "AI",
    page?: number,
    question?: string
    url: string
  })=>void

  isChatLoading: boolean
  toggleLoading: (is:boolean) => void
}

const today = new Date();

export const useStore = create<Store>()((set) => ({
  startDate: "",
  setStartDate: (date) => set(() => ({ startDate: date })),
  endDate: "",
  setEndDate: (date) => set(() => ({ endDate: date })),
  chats: null, // Initialize as null to match the type definition
  setChat:(newChat) => set((state)=>({chats: state.chats ? [...state.chats, newChat] : [newChat]})),
  isChatLoading: false,
  toggleLoading: (is) => set(()=> ({isChatLoading:is})),
  searchBarData: null,
  setSearchBarData: (data) => set(()=>({searchBarData: data}))

}))


