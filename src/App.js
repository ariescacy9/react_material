import DrawerAppBar from './components/Navbar/Navbar';
import ShowCards from './components/proyectCards/ShowCards';
import './App.css';


function App() {
  return (
    <div className="App">
      <DrawerAppBar/>
      <button className='webButton'> <a href='https://ariescacy9.github.io/proyecto_final_html_css/' target="_blank" rel="noreferrer">Mostrar pagina web</a> </button>
      <ShowCards/>
    </div>
  );
}

export default App;
