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
        <h4 className="font-medium">Antecedentes</h4>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              source="background.familyInherited"
              label="Heredo Familiar"
              defaultValue=""
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              label="Personales patologicos"
              source="background.personalPathogens"
              defaultValue=""
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              label="Personales no patologicos"
              source="background.personalNonPathogens"
              defaultValue=""
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              label="Gineco - Obstetricia"
              source="background.gynecologyObstetrics"
              defaultValue=""
            />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};
