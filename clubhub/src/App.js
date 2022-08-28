import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ClubListPage from './ClubListPage.js'
import Homescreen from './Homescreen';
import Header from './Header';
import EventListPage from './EventListPage';
import ClubProfile from './ClubProfile';
import EventEditor from "./EventEditor.js"
import ClubAdmin from "./ClubAdmin"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/clubs" element={<ClubListPage />} />
        {/* <Route path="/clubs/:id/events" element={<EventListPage />} /> */}
        <Route path="/clubs/events" element={<EventListPage />} />
        <Route path="/clubs/:id/events/edit" element={<EventEditor />} />
        <Route path="/clubs/:id" element={<ClubProfile />} />
        <Route path="/club-admin" element={<ClubAdmin />} />
        // {/* <Route path="*" element={<Error />}/> */}
      </Routes>
    </Router>
  );
}

export default App;
