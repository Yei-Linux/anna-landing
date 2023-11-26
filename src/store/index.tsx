import { create } from 'zustand';
import { getBotUrlSender } from '../helpers';
import { PHONE_NUMBER, MESSAGE } from '../constants';

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export interface ILadingBotStore {
  botUrlSender: string;
  isOpenMenu: boolean;

  toggleMenu: () => void;
}
export const useLandingBotStore = create<ILadingBotStore>((set) => ({
  botUrlSender: getBotUrlSender(PHONE_NUMBER, MESSAGE),
  isOpenMenu: false,
  isOpenSignIn: false,
  toggleMenu: () =>
    set((state) => ({ ...state, isOpenMenu: !state.isOpenMenu })),
}));

type TSignInType = 'carePlus' | 'treatment' | undefined;
type TSignInData = {
  name: string;
  phone: string;
  hasAnyCronicDesease: boolean;
  cronicDesease: number;
  email: string;
  password: string;
  plan: any;
};
export interface ISignInStore {
  signInData?: TSignInData;
  isOpenSignIn: boolean;
  signInType?: TSignInType;
  currentSignInStep: number;
  nextSignInStep: () => void;
  toggleSignIn: () => void;
  prevSignInStep: () => void;
  setSignInType: (signInType: TSignInType) => void;
  setSigninData: (data: Optional<TSignInData, keyof TSignInData>) => void;
}
export const useSignInStore = create<ISignInStore>((set) => ({
  isOpenSignIn: false,
  currentSignInStep: 1,
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
