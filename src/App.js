import './App.css';
import Colores from './Colores';
import { Datos } from './contexto/Contexto';
import Pagina1 from './Pagina1';
import Pagina2 from './Pagina2';
import Pagina3 from './Pagina3';

function App() {
  return (
      <>
      <Datos>
    <div className="App">
<Pagina1/>
<Pagina2/>
<Pagina3/>
    </div>
     <Colores/>
 </Datos>
    </>
  );
}

export default App;
