import { Route, Routes } from 'react-router-dom';
import './App.css';
import products from './components/Data';
import NavScrollExample from './components/Navbar';
import Productscards from './components/Productscards';
import 'bootstrap/dist/css/bootstrap.min.css';
import Productslist from './components/Productslist';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='The Store' element={<NavScrollExample />}/>
        <Route path='Home' element={<Productscards products={products}/>}/>
        <Route path='Store' element={<Productslist/>}/>
      </Routes>
    </div>
  );
}

export default App;
