import { create } from 'zustand'

type Store = {
  isNavOpen: boolean
  toggleIsNavOpen: void 

  startDate: string
  setStartDate:(date:string)=> void
  endDate: string
  setEndDate:(date:string)=> void
}

const today = new Date();

export const useStore = create<Store>()((set) => ({
  isNavOpen: true,
  toggleIsNavOpen: set((state) => ({ isNavOpen: !state.isNavOpen })),
  startDate: today.toLocaleDateString(""),
  setStartDate: (date) => set((state) => ({ startDate: date })),
  endDate: today.toLocaleDateString(""),
  setEndDate: (date) => set((state) => ({ startDate: date })),
}))



