// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Charts from './pages/Charts';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';

const App = () => (
  <Router>
    <Header />
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flexGrow: 1, padding: '16px' }}>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/tables" component={Tables} />
          <Route path="/charts" component={Charts} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/kanban" component={Kanban} />
        </Switch>
      </main>
    </div>
    <Footer />
  </Router>
);

export default App;
