
import './App.css';
import Exercice1 from './Exercice1';
import Exercice2 from './Exercice2';
import Exercice3 from './Exercice3';
function App() {
  return (
    <div className="App">
      <div id="bloc1">
      <Exercice1/>
      </div>
      <div id="bloc2">
      <Exercice2/>
      </div>
     <div id="bloc3">
     <Exercice3/>
     </div>
      

    </div>
  );
}

export default App;
