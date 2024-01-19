import { create } from 'zustand';

import { getBotUrlSender } from '../helpers';
import { PHONE_NUMBER, MESSAGE } from '../constants';
import { IFlagsmithFeature } from 'flagsmith/types';

type TFlags = {
  signup_controller: IFlagsmithFeature;
} & {
  [x: string]: string | number | boolean | null;
};

export interface ILadingBotStore {
  botUrlSender: string;
  isOpenMenu: boolean;
  isOpenSignIn: boolean;
  toggleMenu: () => void;
  initFlags: (flags: TFlags) => void;
  flags?: TFlags;
}
export const useLandingBotStore = create<ILadingBotStore>((set) => ({
  botUrlSender: getBotUrlSender(PHONE_NUMBER, MESSAGE),
  isOpenMenu: false,
  isOpenSignIn: false,
  toggleMenu: () =>
    set((state) => ({ ...state, isOpenMenu: !state.isOpenMenu })),
  initFlags: (flags) => set((state) => ({ ...state, flags })),
}));
