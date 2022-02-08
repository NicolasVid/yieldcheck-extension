import { Box, FormControl, Typography } from '@mui/material'
import AccordionWrapper from './Accordion'
import BaseInput from './BaseInput'

const NetTaxYieldForm = () => (
  <AccordionWrapper title="Rendement net-net">
    <Typography>
      *Calcul sur la base d'un régime micro-BIC ou micro-foncier:
    </Typography>
    <FormControl sx={{ width: '100%', marginTop: '0.5rem' }}>
      <BaseInput type="taxRate" label="Taux d'imposition marginal (en %)" />
    </FormControl>
  </AccordionWrapper>
)

export default NetTaxYieldForm