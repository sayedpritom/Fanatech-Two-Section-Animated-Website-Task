import Navbar from './components/Navbar/Navbar'
import './App.css';
import Banner from './components/Banner/Banner';
import Explore from './components/Explore/Explore';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Explore />
    </div>
  );
}

export default App;
