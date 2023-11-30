import { List } from '../../../../../ui/List';
import { Text } from '../../../../../ui/Text';

export interface IPlanDetails {
  details: Array<{ title: string }>;
}

export const PlanDetails = ({ details }: IPlanDetails) => {
  return (
    <div className="w-full">
      <Text
        text="Al suscribirte a Care+ tendrás:"
        level="sm"
        fontWeight="semibold"
        as="h3"
      />
      <List className="max-h-[70px] overflow-auto !gap-1">
        {details.map(({ title }) => (
          <List.Item title={title} />
        ))}
      </List>
    </div>
  );
};
