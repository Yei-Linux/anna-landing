import {
  CreateButton,
  Edit,
  ReferenceManyField,
  SimpleForm,
  TextInput,
  Toolbar,
} from 'react-admin';
import { PatientDiagnosisTable } from './PatientDiagnosisTable';
import { Fragment } from 'react';
import { Grid } from '@mui/material';
import {
  EditPageWrapper,
  EditWrapper,
} from '../../../layouts/admin/EditWrapper';
import { UnderlineSection } from '../../../layouts/admin/UnderlineSection';
import { Breadcrumb } from '../Breadcrumb/Breadcrumb';
import { Empty } from '../../../layouts/admin/Empty';

const ToolbarEdit = () => {
  return (
    <Toolbar>
      <Fragment></Fragment>
    </Toolbar>
  );
};

export const EditPatient = () => {
  return (
    <div className="editpatient__view h-full">
      <Breadcrumb />

      <Edit component={EditPageWrapper}>
        <SimpleForm component={EditWrapper} toolbar={<ToolbarEdit />}>
          <h2 className="font-semibold mb-5">Patient Information</h2>

          <Grid container spacing={2}>
            <Grid item sm={6} xs={12}>
              <TextInput source="fullName" label="Full Name" disabled />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextInput source="phone" label="Phone" disabled />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextInput
                source="documentNumber"
                label="Document Number"
                disabled
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextInput source="gender" label="Gender" disabled />
            </Grid>
          </Grid>

          <ReferenceManyField
            label="Diagnosis"
            reference="diagnosis"
            target="userId"
          >
            <UnderlineSection
              title="Diagnosis"
              contentHeader={
                <Fragment>
                  <CreateButton label="CREATE" />
                </Fragment>
              }
            >
              <PatientDiagnosisTable />
            </UnderlineSection>
          </ReferenceManyField>
        </SimpleForm>
      </Edit>
    </div>
  );
};
