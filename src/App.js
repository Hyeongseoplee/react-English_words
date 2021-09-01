import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Daylist from './components/Daylist';
import Day from './components/Day';


function App() {

  return (
    <BrowserRouter>
      <main className="App">
        <Header/>
          <Route path="/">
            <Daylist></Daylist>
          </Route>
          <Route path="/words/:day">
            <Day></Day>
          </Route>
      </main>
    </BrowserRouter>

  )
}

export default App;
