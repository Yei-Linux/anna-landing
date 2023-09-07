import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { PatientList } from './Patients/List';
import { adminTheme } from './theme';

const AdminWrapper = () => {
  return (
    <Admin dataProvider={simpleRestProvider('/api')} theme={adminTheme}>
      <Resource
        options={{ label: 'Patients' }}
        name="patients"
        list={PatientList}
        edit={EditGuesser}
      />
    </Admin>
  );
};

export default AdminWrapper;
