import { List } from '../../../../../../ui/List';

export interface IPlanDetails {
  details: Array<{ title: string }>;
}

export const PlanDetails = ({ details }: IPlanDetails) => {
  return (
    <div className="w-full">
      <List className="!gap-3">
        {details.map(({ title }, index) => (
          <List.Item title={title} key={index} />
        ))}
      </List>
    </div>
  );
};
