import Osc1 from './components/osc1';
import Filter from './components/filter';
import Keyboard from './components/keyboard';
import ADSR from './components/adsr';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Paper, Stack } from '@mui/material';


function App() {

  return (
    <Container component="main" sx={{ borderRadius: 2, backgroundColor: '#111936' }}>
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
        <Stack spacing={1} sx={{ mb: 2 }}>
          <Stack direction={'row'} justifyContent={'space-around'} spacing={1}>
            <Paper sx={{ backgroundColor: '#1a223f' }}>
              <Stack>
                <Osc1 />
                <ADSR />
              </Stack>
            </Paper>
            <Paper sx={{ backgroundColor: '#1a223f' }}>
              <Filter />
            </Paper>
          </Stack>
          <Paper sx={{
            py: 3,
            backgroundColor: '#1a223f', display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <Keyboard />
          </Paper>
        </Stack>
      </Box>
    </Container>
  );
}

export default App;






