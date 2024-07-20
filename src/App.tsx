import React from 'react';
import MainRoutes from './MainRoutes';
import Notification from './components/notification/Notification';
import { ThemeProvider } from '@material-tailwind/react';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Notification />
        <CartProvider>
          <MainRoutes />
        </CartProvider>
      </div>
    </ThemeProvider>
  );
}
export default App;
