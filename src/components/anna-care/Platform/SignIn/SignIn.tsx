import Drawer from '@mui/material/Drawer';
import { useSignInStore } from '../../../../store';
import { CarePlus } from './CarePlus';
import { Treatment } from './Treatment';
import { Image } from '../../../ui/Image';

export const SignIn = () => {
  const {
    isOpenSignIn,
    toggleSignIn,
    signInType,
    prevSignInStep,
    currentSignInStep,
  } = useSignInStore();

  return (
    <Drawer
      open={isOpenSignIn}
      onClose={toggleSignIn}
      className="caresignin-drawer w-full"
    >
      <div className="w-full h-full">
        <div className="flex p-3 border-2 border-b-neutralPrimary">
          <Image
            src="/assets/left.png"
            alt="Not Results"
            className="cursor-pointer"
            width={25}
            height={20}
            hasShadow={false}
            onClick={() => {
              if (currentSignInStep === 1) {
                toggleSignIn();
                return;
              }
              prevSignInStep();
            }}
          />
        </div>
        <div className="flex justify-center items-center w-full h-[95%]">
          <div className="max-w-[400px] max-h-[600px] h-full py-5">
            {signInType === 'carePlus' && <CarePlus />}
            {signInType === 'treatment' && <Treatment />}
          </div>
        </div>
      </div>
    </Drawer>
  );
};
