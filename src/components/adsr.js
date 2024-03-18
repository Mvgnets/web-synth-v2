import { useContext } from "react"
import { CTX } from "../context/store"
import { Box, Slider, Typography } from "@mui/material"

const ADSR = () => {
    const [appState, updateState] = useContext(CTX)
    let { attack, decay, sustain, release } = appState.envelope
    const change = e => {
        let { name, value } = e.target
        updateState({ type: "CHANGE_ADSR", payload: { id: name, value } })
    }
    return (
        <Box sx={{ px: 3, py: 2 }}>
            <Typography variant="h4" sx={{ color: 'white', mb: 1 }}>ADSR</Typography>

            <Box sx={{ px: 2 }}>
                <Typography variant="h5" sx={{ color: 'white', mb: 1 }}>Attack</Typography>
                <Slider aria-label="attack" name="attack" value={attack} onChange={change} sx={{ py: 2 }} max={2} step={0.02} />
            </Box>
            <Box sx={{ px: 2 }}>
                <Typography variant="h5" sx={{ color: 'white', mb: 1 }}>Decay</Typography>
                <Slider aria-label="decay" name="decay" value={decay} onChange={change} sx={{ py: 2 }} max={1} step={0.01} />
            </Box>
            <Box sx={{ px: 2 }}>
                <Typography variant="h5" sx={{ color: 'white', mb: 1 }}>Sustain</Typography>
                <Slider aria-label="sustain" name="sustain" value={sustain} onChange={change} sx={{ py: 2 }} max={1} step={0.01} />
            </Box>
            <Box sx={{ px: 2 }}>
                <Typography variant="h5" sx={{ color: 'white', mb: 1 }}>Release</Typography>
                <Slider aria-label="release" name="release" value={release} onChange={change} sx={{ py: 2 }} max={2} step={0.02} />
            </Box>
        </Box>
    )
}

export default ADSR;