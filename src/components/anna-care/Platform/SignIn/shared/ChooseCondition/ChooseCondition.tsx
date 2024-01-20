import { useSignInStore } from '../../../../../../store';
import { Button } from '../../../../../ui/Button';
import { Text } from '../../../../../ui/Text';
import { Options } from '../Options/Options';
import { useOptionsStore } from '../../../../../../store/options';
import { useChooseCondition } from './useChooseCondition';

export interface IChooseCondition {
  isFromCarePlus?: boolean;
}
export const ChooseCondition = ({
  isFromCarePlus = true,
}: IChooseCondition) => {
  const { handleChoose, isRegistering, cronicalDiseasesId } =
    useChooseCondition();
  const { options } = useOptionsStore();
  const { signInData, setSigninData } = useSignInStore();

  return (
    <div className="flex flex-col md:justify-between gap-1 md:gap-10 h-full p-4">
      <div className="flex flex-col gap-2">
        <Text
          text="Condición"
          level="base"
          fontWeight="semibold"
          as="h3"
          className="text-primary text-center"
        />
        <Text
          text="Porfavor, selecciona la situación crónica la cual llevas seguimiento"
          level="base"
          as="p"
          className="text-center"
        />
      </div>

      <div className="flex justify-center items-center">
        {options?.cronicalDiseases && (
          <Options
            compareToId={signInData?.cronicDesease ?? cronicalDiseasesId}
            setter={(id) => setSigninData({ cronicDesease: id })}
            options={options.cronicalDiseases}
          />
        )}
      </div>

      <Button
        disabled={isRegistering}
        className="w-full"
        onClick={() => handleChoose(isFromCarePlus)}
      >
        {isRegistering ? 'Registrando...' : 'Continuar'}
      </Button>
    </div>
  );
};
