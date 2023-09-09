import { Grid } from '@mui/material';
import { SimpleForm, TextInput } from 'react-admin';
import { EditWrapper } from '../../../layouts/admin/EditWrapper';
import { EditDetails } from './Details/EditDetails';

export const DiagnosisForm = () => {
  return (
    <SimpleForm component={EditWrapper}>
      <h2 className="font-semibold mb-5">Diagnosis Information</h2>

      <Grid container spacing={2}>
        <Grid item sm={6} xs={12}>
          <TextInput fullWidth source="title" label="Title" />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextInput fullWidth source="description" label="Description" />
        </Grid>
      </Grid>

      <EditDetails />
    </SimpleForm>
  );
};
