import React from 'react';
import logo from './logo.svg';
import NavBar from './Components/header';
import Sidebar from './Components/Sidebar';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import About from './Components/About';
import Shop from './Components/Shop';
import Home from './Components/Home';
import UserForm from './Components/UserForm';
import Parentcomp from './Components/Parentcomp';
function App() {

  const wrapperStyle = {minHeight:'1244.06px'}

  return (
    <div className="App">
      <NavBar />
      <Router >
      <Sidebar />
        <div class="content-wrapper" style={wrapperStyle} >
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/aboutus' component={About}/>
        <Route path='/shop' component={Shop}/>
        <Route path='/form' component={UserForm} />
        <Route path='/errors' component={Parentcomp} />
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
