import { FC } from 'react';
import { Button, useRecordContext } from 'react-admin';

export interface IEditButton {
  resourceName: string;
}
export const EditButton: FC<IEditButton> = ({ resourceName }) => {
  const record = useRecordContext();
  return (
    <Button
      color="primary"
      size="small"
      label=""
      href={`${window.location.href}/${resourceName}/${record.id}`}
    >
      <>Edit</>
    </Button>
  );
};
