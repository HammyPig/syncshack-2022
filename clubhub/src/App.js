import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ClubListPage from './ClubListPage.js'
import EventListPage from './EventListPage.js'
import ClubProfile from "./ClubProfile.js"
import EventEditor from "./EventEditor.js"
import { events } from "./events.js"
import Homescreen from './Homescreen';
import Header from './Header';


function App() {
  return (
    <Router>
      header
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/clubs" element={<ClubListPage />} />
        <Route path="/clubs/:id/events" element={<EventListPage />} />
        <Route path="/clubs/:id/events/edit" element={<EventEditor />} />
        <Route path="/clubs/:id" element={<ClubProfile />} />
        {/* <Route path="*" element={<Error />}/> */}
      </Routes>
      footer
    </Router>
  );
}

export default App;
