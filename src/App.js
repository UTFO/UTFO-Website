import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/pages/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
