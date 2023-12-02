import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { TAnnaOptions } from '../../back/services/options';
import { ZUSTAND_STORE_VERSION } from '../constants';
import { getAnnaOptions } from '../services/options';
import { useEffect } from 'react';

type TOptionsStore = {
  options: TAnnaOptions | null;
  setOptions: (options: TAnnaOptions) => void;
};

export const useOptionsStore = create(
  persist<TOptionsStore>(
    (set, get) => ({
      options: null,
      setOptions: (options) => {
        set({ options });
      },
    }),
    {
      name: 'options-storage',
      storage: createJSONStorage(() => localStorage),
      version: ZUSTAND_STORE_VERSION,
      migrate: async (persistedState, version) => {
        const options = await getAnnaOptions();
        if (!options) return persistedState as TOptionsStore;
        return { ...(persistedState as TOptionsStore), options };
      },
    }
  )
);

export const useDefaultOptionsStorage = () => {
  const { setOptions } = useOptionsStore();
  const setDefaultOptions = async () => {
    const options = await getAnnaOptions();
    if (!options) return null;
    setOptions(options);
  };

  useEffect(() => {
    try {
      const options = localStorage.getItem('options-storage');
      if (!options) {
        setDefaultOptions();
        return;
      }

      const optionsJson = JSON.parse(options)?.state?.options;
      const isValid =
        optionsJson?.diseases?.length > 0 &&
        optionsJson?.turns?.length > 0 &&
        optionsJson?.cronicalDiseases?.length > 0;
      if (isValid) return;

      setDefaultOptions();
    } catch (error) {}
  }, []);
};
