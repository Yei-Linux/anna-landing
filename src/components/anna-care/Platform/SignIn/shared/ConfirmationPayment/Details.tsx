import { Text } from '../../../../../ui/Text';

export const ConfirmationDetails = () => {
  return (
    <div className="p-7 flex flex-col gap-5 bg-neutralPrimaryLight rounded-lg">
      <Text text="Turno: Tarde" level="base" as="p" />
      <Text text="Dia: Martes 21" level="base" as="p" />
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
