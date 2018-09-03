import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar'

// This gets rendered onto our page, injected
// in place of content in index.html
class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Container className="main">  
          <EventDashboard/>
        </Container>
      </div>
    );
  }
}

export default App;

/* Identifying state
  EventDashboard
    Events [] - Stateful
    isOpen - Stateful
  EventForm
    Forms manage state - Stateful
  Navbar
    CreateEvent, Login, Signout - all rely on user interation
      Stateful
*/