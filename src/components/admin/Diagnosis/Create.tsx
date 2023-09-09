import { Create } from 'react-admin';
import { EditPageWrapper } from '../../../layouts/admin/EditWrapper';
import { Breadcrumb } from '../Breadcrumb/Breadcrumb';
import { DiagnosisForm } from './Form';

export const CreateDiagnosis = () => (
  <div className="editdiagnosis__view">
    <Breadcrumb />

    <Create component={EditPageWrapper}>
      <DiagnosisForm />
    </Create>
  </div>
);
