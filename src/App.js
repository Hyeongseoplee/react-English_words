import { Link } from 'react';
import Header from './components/Header';
// import Daylist from './components/Daylist';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Header/>
        <Route>
          <Route to="/"></Route>
        </Route>
      </main>
    </BrowserRouter>

  )
}

export default App;
