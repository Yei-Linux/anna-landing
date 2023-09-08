import { List, Datagrid, TextInput, TextField, EditButton } from 'react-admin';
import { useIndexTable } from '../../../hooks';
import { IndexColumn } from '../../ui/IndexColumn';

const ListActions = () => <></>;

const patientstFilters = [
  <TextInput
    className="search_admin"
    label="Search a patient..."
    source="q"
    alwaysOn
    variant="standard"
  />,
];

const ListContent = () => {
  const { data } = useIndexTable();

  return (
    <Datagrid bulkActionButtons={false} data={data}>
      <IndexColumn />
      <TextField source="fullName" />
      <TextField source="documentNumber" />
      <TextField source="phone" />
      <EditButton />
    </Datagrid>
  );
};

export const PatientList = () => {
  return (
    <div className="pt-5">
      <div>
        <h2 className="font-semibold">Patients</h2>
        <p className="font-light">
          Here you can find patients that was registered throught the bot
        </p>
      </div>

      <List actions={<ListActions />} filters={patientstFilters}>
        <ListContent />
      </List>
    </div>
  );
};
