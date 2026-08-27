import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import DashboardHome from './pages/DashboardHome'
import Placeholder from './pages/Placeholder'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Placeholder title="Landing Page" />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="events" element={<Placeholder title="Events" />} />
          <Route path="resources" element={<Placeholder title="Learning Resources" />} />
          <Route path="opportunities" element={<Placeholder title="Internship Opportunities" />} />
          <Route path="announcements" element={<Placeholder title="Announcements" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App