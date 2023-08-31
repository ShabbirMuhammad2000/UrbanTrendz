import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationMenu from './Navigation-Menu/navigation-menu.js'
import Home from './Home/home.js';
import Cart from './Cart/cart.js';
import Men from './Men/men.js';
import Women from './Women/women.js';
import Kids from './Kids/kids.js';
import SignIn from './Sign-In/sign-in.js'
import SignOut from './Sign-Out/sign-out.js'
import AboutUs from './About-Us/about-us.js';
import './App.css';

function App() {
  return (
      <Router>
        <div className='Navigation'>
        {/* Render Navigation Menu */}
          <NavigationMenu />  
          <Routes>
            {/* Define Routes */}
            <Route path='/' Component={Home} />
            <Route path='/men' Component={Men} />
            <Route path='/women' Component={Women} />
            <Route path='/kids' Component={Kids} />
            <Route path='/signin' Component={SignIn} />
            <Route path='/signout' Component={SignOut} />
            <Route path='/aboutus' Component={AboutUs} />
            <Route path='/cart' Component={Cart} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
