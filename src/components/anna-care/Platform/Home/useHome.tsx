import { useSignInStore } from '../../../../store';

export const useHome = () => {
  const { toggleSignIn, setSignInType } = useSignInStore();

  const handleCarePlus = () => {
    setSignInType('carePlus');
    toggleSignIn();
  };

  const handleTreatment = () => {
    setSignInType('treatment');
    toggleSignIn();
  };

  return { handleCarePlus, handleTreatment };
};
