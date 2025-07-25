import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Tournament from './pages/Tournament';
import Match from './pages/Match';
import Leaderboard from './pages/Leaderboard';
import Team from './pages/Team';
import { AuthProvider } from './context/AuthContext';
import { RoleProvider } from './context/RoleContext';
import './styles/tailwind.css';

const App = () => {
  return (
    <AuthProvider>
      <RoleProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/admin" component={Admin} />
            <Route path="/tournament" component={Tournament} />
            <Route path="/match" component={Match} />
            <Route path="/leaderboard" component={Leaderboard} />
            <Route path="/team" component={Team} />
          </Switch>
        </Router>
      </RoleProvider>
    </AuthProvider>
  );
};

export default App;