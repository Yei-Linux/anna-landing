import { Edit, SimpleForm, TextInput, Toolbar } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';
import { Fragment } from 'react';
import { Grid } from '@mui/material';
import { EditDetails } from './EditDetails';

const ToolbarEdit = () => {
  return (
    <Toolbar>
      <Fragment></Fragment>
    </Toolbar>
  );
};

export const EditDiagnosis = () => {
  return (
    <div>
      <Edit>
        <SimpleForm>
          <h2 className="font-semibold mb-5">Diagnosis Information</h2>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextInput source="title" label="Title" variant="standard" />
            </Grid>
            <Grid item xs={12}>
              <TextInput
                source="description"
                label="Description"
                variant="standard"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextInput
                source="creationTime"
                label="Creation Time"
                variant="standard"
                disabled
              />
            </Grid>
          </Grid>

          <EditDetails />
        </SimpleForm>
      </Edit>
    </div>
  );
};
