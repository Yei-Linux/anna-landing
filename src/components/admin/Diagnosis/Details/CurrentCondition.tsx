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
        <h3 className="font-semibold text-md">Padecimiento Actual</h3>
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
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              label="Evolucion"
              variant="standard"
              source="diagnosisDetails.clinicHistory.currentCondition.evolution"
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              label="Estado Actual"
              variant="standard"
              source="diagnosisDetails.clinicHistory.currentCondition.currentStatus"
            />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};
