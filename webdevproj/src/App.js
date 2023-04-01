import './App.css';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <SideBar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
