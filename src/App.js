import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { HomeTemplate } from './templates/HomeTemplate';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
        <HomeTemplate path='/' component={Home} />
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
