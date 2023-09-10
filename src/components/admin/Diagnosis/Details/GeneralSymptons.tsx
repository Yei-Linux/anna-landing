import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from '@mui/material';
import { TextInput } from 'react-admin';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const GeneralSymptons = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <h4 className="font-medium">Sintomas</h4>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              source="diagnosisDetails.clinicHistory.generalSymptoms"
              label="Sintomas Generales"
              defaultValue=""
            />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};
