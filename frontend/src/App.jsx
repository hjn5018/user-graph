import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import GraphPage from './pages/GraphPage.jsx';
import UserListPage from './pages/UserListPage.jsx';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-container">
        <Routes>
          <Route path="/" element={<GraphPage />} />
          <Route path="/users" element={<UserListPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
