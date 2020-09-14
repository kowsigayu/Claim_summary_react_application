import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './component/navbar';
import Login from './component/login';
import Footer from './component/footer';
import ViewClaim from './component/view_claim';
import UpdateClaim from './component/update_claim';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/viewclaim" component={ViewClaim}/>
          <Route exact path="/updateclaim/:id" component={UpdateClaim}/>
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
