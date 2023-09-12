'use client';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { PatientList } from './Patients/List';
import { adminTheme } from './theme';
import { EditPatient } from './Patients/Edit';
import { EditDiagnosis } from './Diagnosis/Edit';
import { AdminLayout } from '../../layouts/admin/AdminLayout';
import PeopleIcon from '@mui/icons-material/People';
import { CreateDiagnosis } from './Diagnosis/Create';
import { EditClinicHistory } from './ClinicHistory/Edit';
import { CreateClinicHistory } from './ClinicHistory/Create';
import { Route } from 'react-router-dom';
import authProvider from '../../config/auth-provider';
import { httpClient } from '../../config/admin-http-client';
import { Login } from './Login/Login';

const AdminWrapper = () => {
  return (
    <Admin
      loginPage={Login}
      authProvider={authProvider}
      dataProvider={simpleRestProvider('/api', httpClient)}
      layout={AdminLayout}
      theme={adminTheme}
    >
      <Resource
        options={{ label: 'Patients' }}
        name="patients"
        list={PatientList}
        edit={EditPatient}
        icon={PeopleIcon}
      >
        <Route path=":userId/diagnosis/create" element={<CreateDiagnosis />} />
        <Route
          path=":userId/diagnosis/:diagnosisId"
          element={<EditDiagnosis />}
        />

        <Route
          path=":userId/clinic-histories/create"
          element={<CreateClinicHistory />}
        />
        <Route
          path=":userId/clinic-histories/:clinicHistoryId"
          element={<EditClinicHistory />}
        />
      </Resource>
    </Admin>
  );
};

export default AdminWrapper;
