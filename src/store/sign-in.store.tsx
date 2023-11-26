import { create } from 'zustand';
import { Optional } from '../types';

type TSignInType = 'carePlus' | 'treatment' | undefined;
type TSignInData = {
  name: string;
  phone: string;
  hasAnyCronicDesease: boolean;
  cronicDesease: number;
  email: string;
  password: string;
};
export interface ISignInStore {
  signInData?: TSignInData;
  isOpenSignIn: boolean;
  signInType?: TSignInType;
  currentSignInStep: number;
  setCurrentSignInStep: (currentSignInStep: number) => void;
  nextSignInStep: () => void;
  prevSignInStep: () => void;
  toggleSignIn: () => void;
  setSignInType: (signInType: TSignInType) => void;
  setSigninData: (data: Optional<TSignInData, keyof TSignInData>) => void;
}
export const useSignInStore = create<ISignInStore>((set) => ({
  isOpenSignIn: false,
  currentSignInStep: 1,
  setCurrentSignInStep: (currentSignInStep) =>
    set((state) => ({
      ...state,
      currentSignInStep: currentSignInStep,
    })),
  nextSignInStep: () =>
    set((state) => ({
      ...state,
      currentSignInStep: state.currentSignInStep + 1,
    })),
  prevSignInStep: () =>
    set((state) => ({
      ...state,
      currentSignInStep: Math.max(1, state.currentSignInStep - 1),
    })),
  toggleSignIn: () =>
    set((state) => ({ ...state, isOpenSignIn: !state.isOpenSignIn })),
  setSignInType: (signInType) => set((state) => ({ ...state, signInType })),
  setSigninData: (data: Optional<TSignInData, keyof TSignInData>) =>
    set((state) => ({
      ...state,
      signInData: { ...state.signInData, ...(data as any) },
    })),
}));
