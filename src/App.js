import {FiSearch} from 'react-icons/fi';
import './styles.css';

function App() {
  return (
    <div className="container">
      <h1 className="title"> Buscador CEP</h1>

      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite seu CEP..."
        />

        <button className="buttonSearch">
          <FiSearch size="25" color="#000" />
        </button>
      </div>

      <main className="main">
      <h2> CEP: 925000089</h2>

      <span> Rua Teste Algum </span>
      <span> Complemento: algum complemento</span>
      <span> Guaiba </span>
      <span> Campo Grando - Rs </span>
      </main>

    </div>
  );
}

export default App;
