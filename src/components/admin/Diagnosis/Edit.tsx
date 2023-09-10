import { Edit } from 'react-admin';
import { EditPageWrapper } from '../../../layouts/admin/EditWrapper';
import { Breadcrumb } from '../Breadcrumb/Breadcrumb';
import { DiagnosisForm } from './Form';
import { useParams } from 'react-router-dom';

export const EditDiagnosis = () => {
  const { userId, diagnosisId } = useParams();

  return (
    <div className="editdiagnosis__view">
      <Breadcrumb />

      <Edit
        component={EditPageWrapper}
        resource="diagnosis"
        id={diagnosisId}
        redirect={`/patients/${userId}`}
      >
        <DiagnosisForm />
      </Edit>
    </div>
  );
};
