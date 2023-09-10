import { Create } from 'react-admin';
import { EditPageWrapper } from '../../../layouts/admin/EditWrapper';
import { Breadcrumb } from '../Breadcrumb/Breadcrumb';
import { ClinicHistoryForm } from './Form';
import { useParams } from 'react-router-dom';

export const CreateClinicHistory = () => {
  const { userId } = useParams();

  return (
    <div className="editdiagnosis__view">
      <Breadcrumb />

      <Create
        resource="clinic-histories"
        component={EditPageWrapper}
        redirect={`/patients/${userId}`}
      >
        <ClinicHistoryForm />
      </Create>
    </div>
  );
};
