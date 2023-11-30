import { List } from '../../../../../ui/List';
import { Text } from '../../../../../ui/Text';

export const PlanDetails = () => {
  return (
    <div className="w-full">
      <Text
        text="Al suscribirte a Care+ tendrás:"
        level="sm"
        fontWeight="semibold"
        as="h3"
      />
      <List className="max-h-[70px] overflow-auto !gap-1">
        <List.Item title="Trata tu dolor" />
        <List.Item title="Selecciona tu horario y listo" />
        <List.Item title="Hazte seguimiento y ahorra" />
      </List>
    </div>
  );
};
