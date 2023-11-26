import { useSignInStore, useStepsStore } from '../../../../../../store';
import { Button } from '../../../../../ui/Button';
import { Text } from '../../../../../ui/Text';
import { Image } from '../../../../../ui/Image';

export const AnyCondition = () => {
  const { setSigninData } = useSignInStore();
  const { nextSignInStep } = useStepsStore();

  return (
    <div className="flex flex-col justify-between gap-10 h-full">
      <div className="flex flex-col gap-2">
        <Text
          text="¿Sufres de alguna condición crónica?"
          level="2xl"
          fontWeight="semibold"
          as="h3"
        />
      </div>

      <div className="flex justify-center items-center">
        <Image
          src="/assets/tonometer.png"
          alt="Not Results"
          width={200}
          height={200}
          hasShadow={false}
        />
      </div>

      <div className="flex flex-col gap-3">
        <Button
          className="w-full"
          onClick={() => {
            setSigninData({
              hasAnyCronicDesease: true,
            });
            nextSignInStep();
          }}
        >
          Si, tengo condición
        </Button>
        <Button
          className="w-full bg-white !text-primary !border-2 !border-primary"
          onClick={() => {
            setSigninData({
              hasAnyCronicDesease: false,
            });
            nextSignInStep();
          }}
        >
          No, no tengo
        </Button>
      </div>
    </div>
  );
};
