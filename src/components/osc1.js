import { useContext } from "react";
import { CTX } from "../context/store";
import { Box, Button, ButtonGroup, Slider, Typography } from "@mui/material";


const Osc1 = () => {
    const [appState, updateState] = useContext(CTX);
    let { type, detune } = appState.osc1Settings;

    const change = e => {
        let { name, value } = e.target;
        updateState({ type: "CHANGE_OSC1", payload: { id: name, value } })
    }

    const changeType = e => {
        let { id } = e.target;
        updateState({ type: "CHANGE_OSC1_TYPE", payload: { id } })
    }

    const selectedType = (inputType) => {
        if (inputType === type) {
            return 'contained'
        }
        return 'outlined'
    }

    return (
        <Box sx={{ px: 3, py: 2 }}>
            <Typography variant="h4" sx={{ color: 'white', mb: 1 }}>Osc1</Typography>
            <Box sx={{ px: 2 }}>
                <Typography variant="h5" sx={{ color: 'white', mb: 1 }}>Detune</Typography>
                <Slider aria-label="Detune" name='detune' value={detune} onChange={(e) => change(e)} sx={{ py: 2 }} />
            </Box>
            <Box sx={{ px: 2 }}>
                <Typography variant="h5" sx={{ color: 'white', mb: 1 }}>Wave</Typography>
                <ButtonGroup>
                    <Button id='sine' onClick={changeType} variant={selectedType('sine')}>Sine</Button>
                    <Button id='triangle' onClick={changeType} variant={selectedType('triangle')}>Triangle</Button>
                    <Button id='square' onClick={changeType} variant={selectedType('square')} >Square</Button>
                    <Button id='sawtooth' onClick={changeType} variant={selectedType('sawtooth')}>Sawtooth</Button>
                </ButtonGroup>
            </Box>
        </Box>
    )
}

export default Osc1;