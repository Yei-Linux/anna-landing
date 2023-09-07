import { useMemo } from 'react';
import {
  List,
  Datagrid,
  TopToolbar,
  TextInput,
  useListContext,
  TextField,
  useRecordContext,
} from 'react-admin';

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

const Index = () => {
  const record = useRecordContext();
  return <span>{record.__index__ ?? ''}</span>;
};

const ListContent = () => {
  const { data: rawData, page, perPage } = useListContext();

  const data = useMemo(
    () =>
      rawData?.map((item, index) => ({
        ...item,
        __index__: index + 1 + perPage * (page - 1),
      })) || [],
    [rawData]
  );

  return (
    <Datagrid rowClick="edit" bulkActionButtons={false} data={data}>
      <Index />
      <TextField source="fullName" />
      <TextField source="documentNumber" />
      <TextField source="phone" />
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
