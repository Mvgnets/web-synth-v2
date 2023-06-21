import './App.scss';
import Osc1 from './components/osc1';
import Filter from './components/filter';
import Keyboard from './components/keyboard';
import ADSR from './components/adsr';

function App() {
  return (
    <div className="app">
      <h1 className='center'>Web Synth v1</h1>
      <Osc1 />
      <ADSR />
      <Filter />
      <Keyboard />
    </div>
  );
}

export default App;
