import {
  BooleanInput,
  Edit,
  SaveButton,
  SelectInput,
  SimpleForm,
  TextInput,
  Toolbar,
  required,
} from 'react-admin';
import { Grid } from '@mui/material';
import {
  EditPageWrapper,
  EditWrapper,
} from '../../../layouts/admin/EditWrapper';
import { Breadcrumb } from '../Breadcrumb/Breadcrumb';
import { useOptionsStore } from '../../../store/options';
import { useWatch } from 'react-hook-form';
import { TAnnaOptions } from '../../../../back/services/options';

const ToolbarEdit = () => {
  return (
    <Toolbar>
      <div className="w-full flex justify-between">
        <SaveButton label="Save Patient" />
      </div>
    </Toolbar>
  );
};

interface IPaymentsInput {
  cronicDiseases?: TAnnaOptions['cronicalDiseases'];
}
const PaymentsInput = ({ cronicDiseases }: IPaymentsInput) => {
  const cronicalDiseasesId = useWatch({ name: 'cronicalDiseasesId' });
  const plans = cronicalDiseasesId
    ? cronicDiseases?.find(({ id }) => id == cronicalDiseasesId)?.paymentPlan
    : [];
  return (
    <SelectInput
      choices={
        plans?.map(({ id, type, price }) => ({
          id,
          name: `Plan ${type} con precio de ${price}`,
        })) ?? []
      }
      source="paymentPlansId"
      validate={required()}
    />
  );
};

export const PendingEditPatient = () => {
  const { options } = useOptionsStore();
  const cronicDiseases = options?.cronicalDiseases;

  if (!cronicDiseases) return null;

  return (
    <div className="editpatient__view h-full">
      <Breadcrumb />

      <Edit component={EditPageWrapper} redirect={`/not-approved-patients`}>
        <SimpleForm component={EditWrapper} toolbar={<ToolbarEdit />}>
          <h2 className="font-semibold mb-5">
            Usuario Pendiente de Aprobacion
          </h2>

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
              <TextInput source="email" label="Email" disabled />
            </Grid>
            <Grid item sm={6} xs={12}>
              <BooleanInput
                source="isInactive"
                label="Desactivar bot para este usuario"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <SelectInput
                choices={
                  cronicDiseases?.map(({ id, text }) => ({
                    id,
                    name: text,
                  })) ?? []
                }
                source="cronicalDiseasesId"
                validate={required()}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <PaymentsInput cronicDiseases={cronicDiseases} />
            </Grid>
            <Grid item sm={6} xs={12}>
              <BooleanInput source="approved" label="Aprobar Solicitud" />
            </Grid>
          </Grid>
        </SimpleForm>
      </Edit>
    </div>
  );
};
