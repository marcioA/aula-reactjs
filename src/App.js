import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {
  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={() => { }} formsClass="app" />
    </div>
  );
}

export default App;
