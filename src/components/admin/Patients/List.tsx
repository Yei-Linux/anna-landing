import { List, Datagrid, TextInput, TextField, EditButton } from 'react-admin';
import { useIndexTable } from '../../../hooks';
import { IndexColumn } from '../../ui/IndexColumn';
import { EditWrapper } from '../../../layouts/admin/EditWrapper';
import { Breadcrumb } from '../Breadcrumb/Breadcrumb';
import { Empty } from '../../../layouts/admin/Empty';

const ListActions = () => <></>;

const patientstFilters = [
  <TextInput
    autoComplete="off"
    className="search_admin"
    label=""
    source="q"
    alwaysOn
    placeholder="Search a patient"
    variant="standard"
    InputLabelProps={{
      shrink: true,
    }}
  />,
];

const ListContent = () => {
  const { data } = useIndexTable();

  return (
    <Datagrid
      bulkActionButtons={false}
      data={data}
      empty={<Empty text="Aún no hay pacientes registrados en Ana" />}
    >
      <IndexColumn />
      <TextField source="fullName" sortable={false} />
      <TextField source="email" sortable={false} />
      <TextField source="isInactive" sortable={false} />
      <TextField source="phone" sortable={false} />
      <EditButton />
    </Datagrid>
  );
};

export const PatientList = () => {
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb />
      <EditWrapper>
        <div>
          <h2 className="font-semibold mb-3">Patients</h2>
          <p className="font-light">
            Here you can find patients that was registered throught the bot
          </p>
        </div>

        <List actions={<ListActions />} filters={patientstFilters}>
          <ListContent />
        </List>
      </EditWrapper>
    </div>
  );
};
