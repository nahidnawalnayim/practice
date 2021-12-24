import './App.css';
import Other from './other';
import {ThemeContext} from './contextapi';
import {useContext} from 'react';
function App() {
 const {color}= useContext(ThemeContext);
  return (
    <div className="App" style={{}}>
      <h3 style={{color: color}}>hello</h3>
      <Other/>
    </div>
  );
}

export default App;
