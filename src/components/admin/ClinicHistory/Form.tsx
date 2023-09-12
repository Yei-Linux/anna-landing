import { Grid } from '@mui/material';
import { SaveButton, SimpleForm, TextInput, Toolbar } from 'react-admin';
import { EditWrapper } from '../../../layouts/admin/EditWrapper';
import { UnderlineSection } from '../../../layouts/admin/UnderlineSection';
import { Background } from './Details/Background';
import { useParams } from 'react-router-dom';

const ToolbarEdit = () => {
  return (
    <Toolbar>
      <SaveButton label="Save" />
    </Toolbar>
  );
};

export const ClinicHistoryForm = () => {
  const { userId } = useParams();

  return (
    <SimpleForm component={EditWrapper} toolbar={<ToolbarEdit />}>
      <h2 className="font-semibold mb-5">Clinic History Information</h2>

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
          <TextInput
            fullWidth
            source="civilStatus"
            label="Estado Civil"
            defaultValue=""
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextInput
            fullWidth
            source="occupation"
            label="Ocupación"
            defaultValue=""
          />
        </Grid>
      </Grid>

      <UnderlineSection title="Informacion Detallada">
        <Background />
      </UnderlineSection>
    </SimpleForm>
  );
};
