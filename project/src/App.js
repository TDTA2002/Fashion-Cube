import './App.css';
import Headers from './components/Header';
import OrderHeader from './components/OrderHeader';
import NavbarClose from './components/NavbarClose';
import Card from './components/Card';
import Section30 from './components/Section30.jsx';
import Deal from './components/Deal.jsx';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Headers></Headers>
      <OrderHeader/>
      <NavbarClose />
      <Card/>
      <Section30/>
      <Deal/>
      <Footer/>
    </div>
  );
}

export default App;
