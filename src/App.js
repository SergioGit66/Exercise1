import './App.css';
import Navbar from './components/NavBar';
import TittleText from './components/TitleText';
import Info from './components/Info';
import AddButton from './components/AddButton';

function App() {
  return (
    <div className="body">
      <Navbar className = "Nav" />
      <TittleText className="exercise" />
      <Info className="textInfo"/>
      <AddButton className="button"/>
    </div>
  );
}

export default App;