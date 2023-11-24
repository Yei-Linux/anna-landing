import { create } from 'zustand';
import { getBotUrlSender } from '../helpers';
import { PHONE_NUMBER, MESSAGE } from '../constants';

export interface IStore {
  botUrlSender: string;
  isOpenMenu: boolean;
  toggleMenu: () => void;
}
export const useLandingBotStore = create<IStore>((set) => ({
  botUrlSender: getBotUrlSender(PHONE_NUMBER, MESSAGE),
  isOpenMenu: false,
  toggleMenu: () =>
    set((state) => ({ ...state, isOpenMenu: !state.isOpenMenu })),
}));
