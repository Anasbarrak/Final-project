import './App.css';
import data from './components/Data';
import NavScrollExample from './components/Navbar';
import Productscards from './components/Productscards';
import 'bootstrap/dist/css/bootstrap.min.css';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>


function App() {
  return (
    <div className="App">
      <NavScrollExample />
      <Productscards data={data}/>
    </div>
  );
}

export default App;
