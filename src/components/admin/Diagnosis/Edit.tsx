import { Edit } from 'react-admin';
import { EditPageWrapper } from '../../../layouts/admin/EditWrapper';
import { Breadcrumb } from '../Breadcrumb/Breadcrumb';
import { DiagnosisForm } from './Form';

export const EditDiagnosis = () => {
  return (
    <div className="editdiagnosis__view">
      <Breadcrumb />
      <Edit component={EditPageWrapper}>
        <DiagnosisForm />
      </Edit>
    </div>
  );
};
