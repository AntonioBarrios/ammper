import { BrowserRouter, Routes, Route } from "react-router-dom";
import Results from './components/Results'
import Transactions from './components/Transactions'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Results></Results>}></Route>
          <Route path = '/transactions/:id' element = {<Transactions></Transactions>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
