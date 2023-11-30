import { create } from 'zustand';

import { getBotUrlSender } from '../helpers';
import { PHONE_NUMBER, MESSAGE } from '../constants';

export interface ILadingBotStore {
  botUrlSender: string;
  isOpenMenu: boolean;
  isOpenSignIn: boolean;
  toggleMenu: () => void;
}
export const useLandingBotStore = create<ILadingBotStore>((set) => ({
  botUrlSender: getBotUrlSender(PHONE_NUMBER, MESSAGE),
  isOpenMenu: false,
  isOpenSignIn: false,
  toggleMenu: () =>
    set((state) => ({ ...state, isOpenMenu: !state.isOpenMenu })),
}));
