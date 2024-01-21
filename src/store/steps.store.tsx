import { create } from 'zustand';

export type TStepsStore = {
  currentSignInStep: number;
  setCurrentSignInStep: (currentSignInStep: number) => void;
  nextSignInStep: () => void;
  prevSignInStep: () => void;
  setIsLastStep: (isLastStep: boolean) => void;
  isLastStep: boolean;
};
export const useStepsStore = create<TStepsStore>((set) => ({
  isLastStep: false,
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
  setIsLastStep: (isLastStep: boolean) =>
    set((state) => ({
      ...state,
      isLastStep,
    })),
}));
