import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { PatientList } from './Patients/List';
import { adminTheme } from './theme';
import { EditPatient } from './Patients/Edit';
import { EditDiagnosis } from './Diagnosis/Edit';
import { AdminLayout } from '../../layouts/admin/AdminLayout';
import PeopleIcon from '@mui/icons-material/People';
import { CreateDiagnosis } from './Diagnosis/Create';

const AdminWrapper = () => {
  return (
    <Admin
      dataProvider={simpleRestProvider('/api')}
      layout={AdminLayout}
      theme={adminTheme}
    >
      <Resource
        options={{ label: 'Patients' }}
        name="patients"
        list={PatientList}
        edit={EditPatient}
        icon={PeopleIcon}
      ></Resource>
      <Resource
        options={{ label: 'Diagnosis' }}
        name="diagnosis"
        edit={EditDiagnosis}
        create={CreateDiagnosis}
      ></Resource>
    </Admin>
  );
};

export default AdminWrapper;
