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

  const handleChangeCondition = () => {
    setSignInType('change-condition');
    toggleSignIn();
  };

  return { handleCarePlus, handleTreatment, handleChangeCondition };
};
