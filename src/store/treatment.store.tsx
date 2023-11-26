import { create } from 'zustand';
import { Optional } from '../types';

type TTreatmentData = {
  disease: number;
  day: number;
  hour: number;
};

export interface ITreatmentStore {
  treatmentData?: TTreatmentData;
  setTreatmentData: (
    data: Optional<TTreatmentData, keyof TTreatmentData>
  ) => void;
}
export const useTreatmentStore = create<ITreatmentStore>((set) => ({
  setTreatmentData: (data: Optional<TTreatmentData, keyof TTreatmentData>) =>
    set((state) => ({
      ...state,
      treatmentData: { ...state.treatmentData, ...(data as any) },
    })),
}));
