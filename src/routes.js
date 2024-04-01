import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import PosterPage from "./pages/PosterPage";
import CommitteePage from "./pages/CommitteePage";
import StatusPage from "./pages/StatusPage";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<PosterPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/committeePage" element={<CommitteePage />} />
      <Route path="/statusPage" element={<StatusPage />} />
      <Route path="/events" element={<EventsPage />} />
    </>
  )
);

export default router;
