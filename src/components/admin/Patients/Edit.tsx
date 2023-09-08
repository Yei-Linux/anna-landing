import {
  Edit,
  ReferenceManyField,
  SimpleForm,
  TextInput,
  Toolbar,
} from 'react-admin';
import { PatientDiagnosisTable } from './PatientDiagnosisTable';
import { Fragment } from 'react';
import { Grid } from '@mui/material';

const ToolbarEdit = () => {
  return (
    <Toolbar>
      <Fragment></Fragment>
    </Toolbar>
  );
};

export const EditPatient = () => {
  return (
    <div>
      <Edit>
        <SimpleForm toolbar={<ToolbarEdit />}>
          <h2 className="font-semibold mb-5">Patient Information</h2>

          <Grid container spacing={2}>
            <Grid item sm={6} xs={12}>
              <TextInput
                source="fullName"
                label="Full Name"
                variant="standard"
                disabled
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextInput
                source="phone"
                label="Phone"
                variant="standard"
                disabled
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextInput
                source="documentNumber"
                label="Document Number"
                variant="standard"
                disabled
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextInput
                source="gender"
                label="Gender"
                variant="standard"
                disabled
              />
            </Grid>
          </Grid>

          <ReferenceManyField
            label="Diagnosis"
            reference="diagnosis"
            target="userId"
          >
            <PatientDiagnosisTable />
          </ReferenceManyField>
        </SimpleForm>
      </Edit>
    </div>
  );
};
