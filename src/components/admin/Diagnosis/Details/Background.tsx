import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TextInput } from 'react-admin';

export const Background = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <h3 className="font-semibold text-md">Antecedentes</h3>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              source="diagnosisDetails.clinicHistory.background.familyInherited"
              label="Heredo Familiar"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              label="Personales patologicos"
              variant="standard"
              source="diagnosisDetails.clinicHistory.background.personalPathogens"
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              label="Personales no patologicos"
              variant="standard"
              source="diagnosisDetails.clinicHistory.background.personalNonPathogens"
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              label="Gineco - Obstetricia"
              variant="standard"
              source="diagnosisDetails.clinicHistory.background.gynecologyObstetrics"
            />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};
