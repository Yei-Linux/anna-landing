import { Datagrid, TextField, Button } from 'react-admin';
import { useIndexTable } from '../../../hooks';
import { IndexColumn } from '../../ui/IndexColumn';
import { Empty } from '../../../layouts/admin/Empty';
import { EditButton } from '../../ui/EditButton';

export const PatientClinicHistoryTable = () => {
  const { data } = useIndexTable();

  return (
    <Datagrid
      bulkActionButtons={false}
      data={data}
      empty={
        <Empty
          text={
            <div className="flex flex-col gap-2 items-center justify-center">
              <p>Este paciente aún no tiene historial clínico</p>

              <Button
                color="primary"
                size="small"
                label=""
                sx={{
                  textTransform: 'none',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#a3a3a3',
                  textDecoration: 'underline',
                  textUnderlineOffset: '5px',
                }}
                href={`${window.location.href}/clinic-histories/create`}
              >
                <>Click aqui para crear uno!</>
              </Button>
            </div>
          }
        />
      }
    >
      <IndexColumn />
      <TextField source="civilStatus" sortable={false} />
      <TextField source="occupation" sortable={false} />
      <TextField source="background.familyInherited" sortable={false} />
      <TextField source="background.personalPathogens" sortable={false} />

      <EditButton resourceName="clinic-histories" />
    </Datagrid>
  );
};
