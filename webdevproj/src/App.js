import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';
import Registration from './Regi';
import Authentication from './Auth';
import ManageDB from './ManageDB';
import SellItem from './SellItem';
import CreateList from './CreateList';
import Theme from './Theme';
import Newsletter from './Newsletter';
import Profile from './Profile';
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
      return (
        <Router>
        <div className="App">
          <Header title="MERN WebDev Project"/>
          <main className='main'>
            <SideBar />
            <div className='mainRouteDisplay'>
              <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/registration' element={<Registration/>}></Route>
                <Route exact path='/authentication' element={<Authentication/>}></Route>
                <Route exact path='/managedb' element={<ManageDB/>}></Route>
                <Route exact path='/sellItem' element={<SellItem/>}></Route>
                <Route exact path='/createList' element={<CreateList/>}></Route>
                <Route exact path='/newsletter' element={<Newsletter/>}></Route>
                <Route exact path='/changeTheme' element={<Theme/>}></Route>
                <Route exact path='/profile' element={<Profile/>}></Route>
                <Route exact path='/about' element={<About/>}></Route>
                <Route exact path='/contact' element={<Contact/>}></Route>
              </Routes>
            </div>
          </main>
          <Footer />
        </div>
        </Router>
      );
}

export default App;
