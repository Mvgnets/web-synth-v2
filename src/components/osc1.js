import { useContext } from "react";
import { CTX } from "../context/store";


const Osc1 = () => {
    const [appState, updateState] = useContext(CTX);
    let { type, detune } = appState.osc1Settings;

    const change = e => {
        let { id, value } = e.target;
        updateState({ type: "CHANGE_OSC1", payload: { id, value } })
    }

    const changeType = e => {
        let { id } = e.target;
        updateState({ type: "CHANGE_OSC1_TYPE", payload: { id } })
    }

    return (
        <div className='control'>
            <h2>Osc1</h2>
            <div className="param">
                <h3>Detune</h3>
                <input
                    value={detune}
                    onChange={change}
                    type="range"
                    id='detune'
                />
            </div>
            <div className="param">
                <h3>Wave</h3>
                <button id='sine' onClick={changeType} className={`${type === "sine" && "active"}`}>Sine</button>
                <button id='triangle' onClick={changeType} className={`${type === "triangle" && "active"}`}>Triangle</button>
                <button id='square' onClick={changeType} className={`${type === "square" && "active"}`}>Square</button>
                <button id='sawtooth' onClick={changeType} className={`${type === "sawtooth" && "active"}`}>Sawtooth</button>
            </div>
        </div>
    )
}

export default Osc1;