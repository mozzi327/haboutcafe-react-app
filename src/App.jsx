import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Layout/Header/Header';
import Home from './Layout/Home/Home';
import Login from './components/Login/Login';
import { getHttp } from './api/Users'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element = {<Home />}/>
        <Route path='/login' element = {<Login />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
