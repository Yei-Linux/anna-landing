import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TextInput } from 'react-admin';

export const PhysicalExploration = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <h3 className="font-semibold text-md">Exploracion Fisica</h3>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h4 className="font-semibold text-md">Signos Vitales</h4>
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              source="diagnosisDetails.diagnosisInformation.physicalExploration.vitalSigns.FC"
              label="FC"
              variant="standard"
            />
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              source="diagnosisDetails.diagnosisInformation.physicalExploration.vitalSigns.TA"
              label="TA"
              variant="standard"
            />
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              source="diagnosisDetails.diagnosisInformation.physicalExploration.vitalSigns.FR"
              label="FR"
              variant="standard"
            />
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              source="diagnosisDetails.diagnosisInformation.physicalExploration.vitalSigns.temperature"
              label="Temperatura"
              variant="standard"
            />
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              source="diagnosisDetails.diagnosisInformation.physicalExploration.vitalSigns.currentWeight"
              label="Peso Actual"
              variant="standard"
            />
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              source="diagnosisDetails.diagnosisInformation.physicalExploration.vitalSigns.previousWeight"
              label="Peso Anterior"
              variant="standard"
            />
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              source="diagnosisDetails.diagnosisInformation.physicalExploration.vitalSigns.idealWeight"
              label="Peso Ideal"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <h4 className="font-semibold text-md">Exploracion General</h4>
            <TextInput
              fullWidth
              multiline
              maxRows={10}
              minRows={3}
              label="Exploracion General"
              variant="standard"
              source="diagnosisDetails.diagnosisInformation.physicalExploration.generalExploration"
            />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};
