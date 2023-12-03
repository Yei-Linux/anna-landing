import { create } from 'zustand';
import { Optional } from '../types';

type TSignInType = 'carePlus' | 'treatment' | 'change-condition' | undefined;
type TSignInData = {
  fullName: string;
  phone: string;
  hasAnyCronicDesease: boolean;
  cronicDesease: string;
  email: string;
  password: string;
};
export interface ISignInStore {
  signInData?: TSignInData;
  isOpenSignIn: boolean;
  signInType?: TSignInType;
  toggleSignIn: () => void;
  setSignInType: (signInType: TSignInType) => void;
  setSigninData: (data: Optional<TSignInData, keyof TSignInData>) => void;
}
export const useSignInStore = create<ISignInStore>((set) => ({
  isOpenSignIn: false,
  currentSignInStep: 1,
  toggleSignIn: () =>
    set((state) => ({ ...state, isOpenSignIn: !state.isOpenSignIn })),
  setSignInType: (signInType) => set((state) => ({ ...state, signInType })),
  setSigninData: (data: Optional<TSignInData, keyof TSignInData>) =>
    set((state) => ({
      ...state,
      signInData: { ...state.signInData, ...(data as any) },
    })),
}));
