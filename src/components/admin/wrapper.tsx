import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { PatientList } from './Patients/List';
import { adminTheme } from './theme';
import { EditPatient } from './Patients/Edit';
import { EditDiagnosis } from './Diagnosis/Edit';

const AdminWrapper = () => {
  return (
    <Admin dataProvider={simpleRestProvider('/api')} theme={adminTheme}>
      <Resource
        options={{ label: 'Patients' }}
        name="patients"
        list={PatientList}
        edit={EditPatient}
      ></Resource>
      <Resource
        options={{ label: 'Diagnosis' }}
        name="diagnosis"
        edit={EditDiagnosis}
      ></Resource>
    </Admin>
  );
};

export default AdminWrapper;
