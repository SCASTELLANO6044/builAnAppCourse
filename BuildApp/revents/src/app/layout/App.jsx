import React from 'react';
//import { Button } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';

export default function App() {
  return (
    <div>
      <NavBar/>
      <EventDashboard />
    </div>
  );
}

