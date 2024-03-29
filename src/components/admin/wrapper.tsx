import { Admin, Resource } from 'react-admin';
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
import { Login } from './Login/Login';
import { queryClient } from '../../config/react-query';
import { dataProvider } from '../../config/life-cycle-callbacks';
import { PendingEditPatient } from './Patients/PendingEdit';
import { PendingPatientList } from './Patients/PendingList';

export const AdminWrapper = () => {
  return (
    <Admin
      loginPage={Login}
      authProvider={authProvider}
      dataProvider={dataProvider}
      layout={AdminLayout}
      theme={adminTheme}
      queryClient={queryClient}
    >
      <Resource
        options={{ label: 'Pacientes Aprobados' }}
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
      <Resource
        options={{ label: 'Usuarios Pendientes' }}
        name="not-approved-patients"
        list={PendingPatientList}
        edit={PendingEditPatient}
        icon={PeopleIcon}
      />
    </Admin>
  );
};
