import { AlertColor } from '@mui/material/Alert';
import { create } from 'zustand';

export interface INotificationStore {
  message: string;
  isOpen: boolean;
  toggle: () => void;
  open: (req: Pick<INotificationStore, 'message' | 'severity'>) => void;
  close: () => void;
  severity?: AlertColor;
}
export const useNotificationStore = create<INotificationStore>((set) => ({
  message: '',
  isOpen: false,
  toggle: () => set((state) => ({ ...state, isOpen: !state.isOpen })),
  open: (req) => set((state) => ({ ...state, ...req, isOpen: true })),
  close: () => set((state) => ({ ...state, isOpen: false })),
}));
