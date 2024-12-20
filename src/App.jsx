import { Routes, Route } from 'react-router-dom';
import Card from './components/Card.jsx'; // Import your Card component
import CardList from './components/component1.jsx'; // Assuming this is your card list component
import Navbar from './components/Navbar.jsx';
import Footer from './components/footer.jsx';
import ImageComponent from './components/Image.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Navbar />
      <ImageComponent />
      <CardList />
      <Footer/>
    </>
  );
}

export default App;
