import './App.css';
import Navbar from './navbar';
import CardList from './cardlist';
import Feedback from './feedback';

function AppMain() {
  return (
    <div className="AppMain">
      <p>Hello There.</p>
      <Navbar />
      <CardList />
      <Feedback />
    </div>
  );
}

export default AppMain;