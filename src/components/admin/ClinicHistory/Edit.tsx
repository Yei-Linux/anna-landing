import { Edit } from 'react-admin';
import { EditPageWrapper } from '../../../layouts/admin/EditWrapper';
import { Breadcrumb } from '../Breadcrumb/Breadcrumb';
import { ClinicHistoryForm } from './Form';
import { useParams } from 'react-router-dom';

export const EditClinicHistory = () => {
  const { userId, clinicHistoryId } = useParams();

  return (
    <div className="editdiagnosis__view">
      <Breadcrumb />

      <Edit
        resource="clinic-histories"
        id={clinicHistoryId}
        component={EditPageWrapper}
        redirect={`/patients/${userId}`}
      >
        <ClinicHistoryForm />
      </Edit>
    </div>
  );
};
