import logo from './logo.svg';
import './App.css';
import ClubListPage from './ClubListPage.js'
import EventListPage from './EventListPage.js'
import EventEditor from "./EventEditor.js"
import { events } from "./events.js"


function App() {
  return (
    <>
    <EventEditor event={events[0]}/>
    </>
  );
}

export default App;
