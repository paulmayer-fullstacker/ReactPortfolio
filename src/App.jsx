// src/App.jsx
// Import components from the React Router DOM library, to manage navigation.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Import the components for the App's main pages
import { Home } from './pages/Home';
import { Project } from './pages/Project';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
// Import Navbar and Footer components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter> 
    {/* All App components wrapped in <BrowserRouter> component, giving all them access to the routing functionality */}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar /> {/* Place Navbar at top of every page */}
        <main style={{ flexGrow: 1 }}> {/* flexGrow takes all available space between Navbar and Footer. */}
          <Routes> {/* Contains all the individual routes */}
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            {/* '*' If the user navigates to a URL not matching above, the NotFound component will be displayed. */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer /> {/* Place Footer at bottom of every page */}
      </div>
    </BrowserRouter>
  );
}
export default App; // Make App available for import into parent files