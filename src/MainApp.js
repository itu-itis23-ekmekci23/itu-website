import './AppMain.css';
import Navbar from './navbar';
import CardList from './cardlist';
import Feedback from './feedback';

function AppMain() {
  return (
    <div className="AppMain">
      <Navbar />
      <CardList />
      <Feedback />
    </div>
  );
}

export default AppMain;