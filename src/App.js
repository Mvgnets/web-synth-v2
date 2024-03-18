import Osc1 from './components/osc1';
import Filter from './components/filter';
import Keyboard from './components/keyboard';
import ADSR from './components/adsr';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid, Paper, Stack } from '@mui/material';


function App() {

  return (
    <Container component="main" maxWidth="lg" sx={{ borderRadius: 2, backgroundColor: '#111936' }}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3" sx={{ mb: 1, color: 'white' }}>
          Web Synth v2
        </Typography>
        <Grid container spacing={1} sx={{ mb: 2 }} alignItems="stretch">
          <Grid item xs={12} md={6}>
            <Paper sx={{ backgroundColor: '#1a223f' }}>
              <Stack>
                <Osc1 />
                <ADSR />
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ backgroundColor: '#1a223f', height: '100%' }}>
              <Filter />
            </Paper>
          </Grid>
          <Grid item xs={12}>

            <Paper sx={{
              py: 3,
              backgroundColor: '#1a223f', display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',


            }}>
              <Keyboard />
            </Paper>
          </Grid>
        </Grid>

      </Box>
    </Container>
  );
}

export default App;






