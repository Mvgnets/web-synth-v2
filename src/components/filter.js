import { useContext } from "react";
import { CTX } from "../context/store";
import { Box, Button, ButtonGroup, Slider, Stack, Typography } from "@mui/material";

const Filter = () => {
    const [appState, updateState] = useContext(CTX);
    const { frequency, detune, Q, gain, type } = appState.filterSettings;

    const change = (e) => {
        let { name, value } = e.target;
        updateState({ type: "CHANGE_FILTER", payload: { id: name, value } })
    }

    const changeType = (e) => {
        let { id } = e.target;
        updateState({ type: "CHANGE_FILTER_TYPE", payload: { id } })
    }

    const selectedType = (inputType) => {
        if (inputType === type) {
            return 'contained'
        }
        return 'outlined'
    }

    return (
        <Box sx={{ px: 3, py: 2, height: '100%' }}>
            <Typography variant="h4" sx={{ color: 'white', mb: 1 }}>Filter</Typography>
            <Stack sx={{ height: '90%' }} justifyContent={'space-between'}>
                <Box sx={{ px: 2 }}>
                    <Typography variant="h5" sx={{ color: 'white', mb: 1 }}>Frequency</Typography>
                    <Slider aria-label="Frequency" name="frequency" value={frequency} onChange={change} sx={{ py: 2 }} max={10000} step={5} />
                </Box>
                <Box sx={{ px: 2 }}>
                    <Typography variant="h5" sx={{ color: 'white', mb: 1 }}>Detune</Typography>
                    <Slider aria-label="Detune" name='detune' value={detune} onChange={change} sx={{ py: 2 }} max={10000} />
                </Box>
                <Box sx={{ px: 2 }}>
                    <Typography variant="h5" sx={{ color: 'white', mb: 1 }}>Q</Typography>
                    <Slider aria-label="Q" name='Q' value={Q} onChange={change} sx={{ py: 2 }} max={10} step={0.1} />
                </Box>


                <Box sx={{ px: 2 }}>
                    <Typography variant="h5" sx={{ color: 'white', mb: 1 }}>Gain</Typography>
                    <Slider aria-label="Gain" sx={{ py: 2 }} value={gain} onChange={change} max={10} name='gain' step={0.1} />
                </Box>

                <Box sx={{ px: 2 }}>
                    <Typography variant="h5" sx={{ color: 'white', mb: 1, mb: 1 }}>Type</Typography>
                    <ButtonGroup>
                        <Button id='lowpass' onClick={changeType} variant={selectedType('lowpass')}>Lowpass</Button>
                        <Button id='highpass' onClick={changeType} variant={selectedType('highpass')}>Highpass</Button>
                        <Button id='notch' onClick={changeType} variant={selectedType('notch')} >Notch</Button>
                        <Button id='lowshelf' onClick={changeType} variant={selectedType('lowshelf')}>Lowshelf</Button>
                        <Button id='highshelf' onClick={changeType} variant={selectedType('highshelf')}>Highshelf</Button>
                    </ButtonGroup>
                </Box>
            </Stack>

        </Box>
    )
}

export default Filter;