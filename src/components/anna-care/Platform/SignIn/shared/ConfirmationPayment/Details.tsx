import { Text } from '../../../../../ui/Text';

export interface IConfirmationDetails {
  turnText: string;
  dayText: string;
}

export const ConfirmationDetails = ({
  dayText,
  turnText,
}: IConfirmationDetails) => {
  return (
    <div className="p-4 flex flex-col gap-5 bg-neutralPrimaryLight rounded-lg border-2">
      <Text text={`Turno: ${turnText}`} level="base" as="p" />
      <Text text={`Dia: ${dayText}`} level="base" as="p" />
      <Text text="Precio sin Care+: S/ 59" level="base" as="p" />
      <Text
        text="Precio con Care+: S/ 0"
        level="base"
        as="p"
        className="text-primary"
      />
    </div>
  );
};
