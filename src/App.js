import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from './pages/Home/Home';
import { HomeTemplate } from './templates/HomeTemplate';

import { AdminTemplate } from './templates/AdminTemplate/AdminTemplate';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Films from './pages/Admin/Films/Films';
import ShowTime from './pages/Admin/ShowTime/ShowTime';
import Users from './pages/Admin/Users/Users';
import AddNew from './pages/Admin/Films/AddNew';
import Edit from './pages/Admin/Films/Edit';



export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      {/* <Loading /> */}
      <div className="App">
        <HomeTemplate path='/' component={Home} />

        <AdminTemplate path='/admin' component={Dashboard} />
        <AdminTemplate path='/admin/users' component={Users} />
        <AdminTemplate path='/admin/films' component={Films} />
        <AdminTemplate path='/admin/films/addnew' component={AddNew} />
        <AdminTemplate path='/admin/films/edit/:id' component={Edit} />
        <AdminTemplate path='/admin/showtimes' component={ShowTime} />


<<<<<<< HEAD
          <AdminTemplate path='/admin' component={Dashboard} /> 
          <AdminTemplate path='/admin/users' component={Users} /> 
          <AdminTemplate path='/admin/films' component={Films} /> 
          <AdminTemplate path='/admin/films/addnew' component={AddNew} /> 
          <AdminTemplate path='/admin/films/edit/:id' component={Edit} /> 
          <AdminTemplate path='/admin/films/showtime/:id/:tenphim' component={ShowTime} /> 

=======


>>>>>>> 7ec642fc79f5facce2253c81512156abaedda4f3
      </div>
    </Router>
  );
}

export default App;
