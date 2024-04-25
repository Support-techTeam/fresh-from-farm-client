import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/scrollToTop';
import Home from './pages/landingPage/Home';

const MainRoutes = () => {
  return (
    <div>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
};

export default MainRoutes;
