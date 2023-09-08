import { Datagrid, TextField, EditButton } from 'react-admin';
import { useIndexTable } from '../../../hooks';
import { IndexColumn } from '../../ui/IndexColumn';

export const PatientDiagnosisTable = () => {
  const { data } = useIndexTable();

  return (
    <Datagrid bulkActionButtons={false} data={data}>
      <IndexColumn />
      <TextField source="title" />
      <TextField source="description" />
      <TextField source="creationTime" />
      <EditButton />
    </Datagrid>
  );
};
