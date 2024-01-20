import { useSignInStore, useStepsStore } from '../../../../../../store';
import { Button } from '../../../../../ui/Button';
import { Text } from '../../../../../ui/Text';
import { Options } from '../Options/Options';
import { useOptionsStore } from '../../../../../../store/options';

export interface ITakeCareOptions {}
export const TakeCareOptions = ({}: ITakeCareOptions) => {
  const { options } = useOptionsStore();
  const { nextSignInStep } = useStepsStore();
  const { signInData, setSigninData } = useSignInStore();

  const handleChoose = (id: string) => {
    const takeCareOptionsUpdated =
      signInData?.takeCareOptionsSelected?.includes(id)
        ? signInData?.takeCareOptionsSelected?.filter(
            (optionId) => id != optionId
          )
        : [...(signInData?.takeCareOptionsSelected ?? []), id];

    setSigninData({
      takeCareOptionsSelected: takeCareOptionsUpdated,
    });
  };

  return (
    <div className="flex flex-col md:justify-between gap-1 md:gap-10 h-full p-4">
      <div className="flex flex-col gap-2">
        <Text
          text="¿Qué es lo que quieres cuidar?"
          level="base"
          fontWeight="semibold"
          as="h3"
          className="text-primary text-center"
        />
        <Text
          text="Puedes seleccionar una o varias"
          level="base"
          as="p"
          className="text-center"
        />
      </div>

      <div className="flex justify-center items-center">
        {options?.takeCareOptions && (
          <Options
            compareToId={signInData?.takeCareOptionsSelected}
            setter={handleChoose}
            options={options.takeCareOptions}
          />
        )}
      </div>

      <Button className="w-full" onClick={nextSignInStep}>
        Continuar
      </Button>
    </div>
  );
};
