import Grid from '@mui/material/Grid';
import {
  DeleteButton,
  SaveButton,
  SimpleForm,
  TextInput,
  Toolbar,
} from 'react-admin';
import { EditWrapper } from '../../../layouts/admin/EditWrapper';
import { EditDetails } from './Details/EditDetails';
import { useParams } from 'react-router-dom';

const ToolbarEdit = () => {
  const { userId } = useParams();

  return (
    <Toolbar>
      <div className="w-full flex justify-between">
        <SaveButton label="Save" />
        <DeleteButton label="Delete" redirect={`/patients/${userId}`} />
      </div>
    </Toolbar>
  );
};

export const DiagnosisForm = () => {
  const { userId } = useParams();

  return (
    <SimpleForm component={EditWrapper} toolbar={<ToolbarEdit />}>
      <h2 className="font-semibold mb-5">Diagnosis Information</h2>

      <TextInput
        sx={{
          display: 'none',
        }}
        fullWidth
        source="userId"
        label="Usuario Id"
        defaultValue={userId}
        disabled
        hidden
      />

      <Grid container spacing={2}>
        <Grid item sm={6} xs={12}>
          <TextInput fullWidth source="title" label="Title" defaultValue="" />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextInput
            fullWidth
            source="description"
            label="Description"
            defaultValue=""
          />
        </Grid>
      </Grid>

      <EditDetails />
    </SimpleForm>
  );
};
