import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/scrollToTop';
import HomeRoutes from './layouts/HomeRoutes';
import GeneralRoutes from './layouts/GeneralRoutes';
import { useStore } from './context/StoreContext';
import Spinner from './components/common/Spinner';
import { observer } from 'mobx-react-lite';

const MainRoutes = () => {
  const { authStore } = useStore();
  const { submitting } = authStore;
  return (
    <>
      <Spinner isLoading={submitting} />
      <Router>
        <ScrollToTop>
          <main>
            <HomeRoutes />
            <GeneralRoutes />
          </main>
        </ScrollToTop>
      </Router>
    </>
  );
};

export default observer(MainRoutes);
