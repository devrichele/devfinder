import './Styles.css';
import { IoSearch } from "react-icons/io5";


function App() {
  return (
    <div>
      <div className='buscar'>
        <div className='campo-busca'>
          <IoSearch className='iconBuscar' />
          <input placeholder="Busque username_" />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}

export default App;
