import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TextInput } from 'react-admin';

export const InterrogationBySystem = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <h4 className="font-medium">Interrogatorio por aparatos y sistemas</h4>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              source="diagnosisDetails.clinicHistory.interrogrationByDevicesAndSystem.digestiveSystem"
              label="Aparato digestivo"
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              label="Aparato cardiovascular"
              source="diagnosisDetails.clinicHistory.interrogrationByDevicesAndSystem.cardiovascularSystem"
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              label="Aparato respiratorio"
              source="diagnosisDetails.clinicHistory.interrogrationByDevicesAndSystem.respiratorySystem"
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              label="Aparato urinario"
              source="diagnosisDetails.clinicHistory.interrogrationByDevicesAndSystem.urinarySystem"
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              label="Aparato genital"
              source="diagnosisDetails.clinicHistory.interrogrationByDevicesAndSystem.genitalSystem"
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              label="Aparato hematológico"
              source="diagnosisDetails.clinicHistory.interrogrationByDevicesAndSystem.bloodSystem"
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              label="Sistema endocrino"
              source="diagnosisDetails.clinicHistory.interrogrationByDevicesAndSystem.endocrineSystem"
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              label="Sistema osteomuscular"
              source="diagnosisDetails.clinicHistory.interrogrationByDevicesAndSystem.musculoskeletalSystem"
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              label="Sistema nervioso"
              source="diagnosisDetails.clinicHistory.interrogrationByDevicesAndSystem.nervousSystem"
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              label="Sistema sensorial"
              source="diagnosisDetails.clinicHistory.interrogrationByDevicesAndSystem.sensorySystem"
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              label="Psicosomático"
              source="diagnosisDetails.clinicHistory.interrogrationByDevicesAndSystem.psychosomatic"
            />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};
