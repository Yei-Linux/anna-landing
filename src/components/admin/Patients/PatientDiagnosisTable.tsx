import { Datagrid, TextField, EditButton } from 'react-admin';
import { useIndexTable } from '../../../hooks';
import { IndexColumn } from '../../ui/IndexColumn';
import { Empty } from '../../../layouts/admin/Empty';

export const PatientDiagnosisTable = () => {
  const { data } = useIndexTable();

  return (
    <Datagrid
      bulkActionButtons={false}
      data={data}
      empty={<Empty text="Este paciente aún no tiene diagnósticos" />}
    >
      <IndexColumn />
      <TextField source="title" sortable={false} />
      <TextField source="description" sortable={false} />
      <TextField source="creationTime" sortable={false} />
      <EditButton />
    </Datagrid>
  );
};
