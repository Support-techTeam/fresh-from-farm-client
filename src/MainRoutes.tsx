import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/scrollToTop';
import HomeRoutes from './layouts/HomeRoutes';
import GeneralRoutes from './layouts/GeneralRoutes';

const MainRoutes = () => {
  return (
    <Router>
      <ScrollToTop>
        <main>
          <HomeRoutes />
          <GeneralRoutes />
        </main>
      </ScrollToTop>
    </Router>
  );
};

export default MainRoutes;
