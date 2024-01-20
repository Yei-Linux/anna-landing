import {
  BooleanInput,
  Button,
  Edit,
  ReferenceManyField,
  SaveButton,
  SelectInput,
  SimpleForm,
  TextInput,
  Toolbar,
  required,
} from 'react-admin';
import { PatientDiagnosisTable } from '../Diagnosis/PatientDiagnosisTable';
import { Fragment } from 'react';
import { Grid } from '@mui/material';
import {
  EditPageWrapper,
  EditWrapper,
} from '../../../layouts/admin/EditWrapper';
import { UnderlineSection } from '../../../layouts/admin/UnderlineSection';
import { Breadcrumb } from '../Breadcrumb/Breadcrumb';
import { PatientClinicHistoryTable } from '../ClinicHistory/PatientClinicHistoryTable';
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

export const EditPatient = () => {
  const { options } = useOptionsStore();
  const cronicDiseases = options?.cronicalDiseases;

  if (!cronicDiseases) return null;

  return (
    <div className="editpatient__view h-full">
      <Breadcrumb />

      <Edit component={EditPageWrapper} redirect={`/patients`}>
        <SimpleForm component={EditWrapper} toolbar={<ToolbarEdit />}>
          <h2 className="font-semibold mb-5">Información del Paciente</h2>

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
                label="Inactive Bot for this user"
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
          </Grid>

          <div className="flex flex-col gap-7 w-full">
            <ReferenceManyField
              label="Clinic History"
              reference="clinic-histories"
              target="userId"
            >
              <UnderlineSection title="Clinic History">
                <PatientClinicHistoryTable />
              </UnderlineSection>
            </ReferenceManyField>

            <ReferenceManyField
              label="Diagnosis"
              reference="diagnosis"
              target="userId"
            >
              <UnderlineSection
                title="Diagnosis"
                contentHeader={
                  <Fragment>
                    <Button
                      color="primary"
                      size="small"
                      label=""
                      href={`${window.location.href}/diagnosis/create`}
                    >
                      <>Create</>
                    </Button>
                  </Fragment>
                }
              >
                <PatientDiagnosisTable />
              </UnderlineSection>
            </ReferenceManyField>
          </div>
        </SimpleForm>
      </Edit>
    </div>
  );
};
