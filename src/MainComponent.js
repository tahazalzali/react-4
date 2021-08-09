
import './App.css';
import {Navbar,NavbarBrand} from 'reactstrap'
import DISHES from './shared/dishes';
import Menu from './Menu';
import CardDish from './CardDish';
function App() {
  return (
    <div className="App">
<Navbar  dark color="primary" >
 <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>

</Navbar>
<CardDish dishes={DISHES}/>
    </div>
  );
}

export default App;
