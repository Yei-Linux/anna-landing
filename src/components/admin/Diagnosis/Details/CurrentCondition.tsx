import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TextInput } from 'react-admin';

export const CurrentCondition = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <h4 className="font-medium">Padecimiento Actual</h4>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              source="diagnosisDetails.clinicHistory.currentCondition.beginning"
              label="Principio"
              defaultValue=""
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              label="Evolucion"
              source="diagnosisDetails.clinicHistory.currentCondition.evolution"
              defaultValue=""
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              label="Estado Actual"
              source="diagnosisDetails.clinicHistory.currentCondition.currentStatus"
              defaultValue=""
            />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};
