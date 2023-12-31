import { Create } from 'react-admin';
import { EditPageWrapper } from '../../../layouts/admin/EditWrapper';
import { Breadcrumb } from '../Breadcrumb/Breadcrumb';
import { DiagnosisForm } from './Form';
import { useParams } from 'react-router-dom';

export const CreateDiagnosis = () => {
  const { userId } = useParams();

  return (
    <div className="editdiagnosis__view">
      <Breadcrumb />

      <Create
        resource="diagnosis"
        component={EditPageWrapper}
        redirect={`/patients/${userId}`}
      >
        <DiagnosisForm />
      </Create>
    </div>
  );
};
