import React from 'react';
import MainRoutes from './MainRoutes';
import Notification from './components/notification/Notification';
import { ThemeProvider } from '@material-tailwind/react';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Notification />
        <MainRoutes />
      </div>
    </ThemeProvider>
  );
}
export default App;
