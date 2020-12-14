import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Ibiza from './components/pages/Ibiza';
import Footer from './components/Footer'
import Login from './components/Login'
import AvaliableFlights from './components/AvaliableFlights';
import {useEffect} from 'react';
import {useStateValue} from './StateProvider';
import {auth} from './firebase';
import CapeTown from './components/pages/CapeTown';
import Milan from './components/pages/Milan';
import Tokyo from './components/pages/Tokyo';
import Services from './components/pages/Services';

function App() {
  const [{}, dispatch] = useStateValue();


  //On load: detect user status
  useEffect(()=> {
    auth.onAuthStateChanged(user => {

      
      if(user){
        console.log('The user is ', user);
        //user is logged in
        //update status of user in data layer
        dispatch({
          type: "SET_USER",
          user: user
        })
      }else{
        console.log('The user is ', user);
        //user is logged out
        //update the data layer: set user to empty
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })

  }, [])
  
  return (
   
    <div>
      <Router> 
        <Switch>
          <Route path="/" exact>
            <NavBar/>
            <Home/>
            <Footer />
          </Route>
         
          <Route path="/login" exact>
            <Login />
          </Route>
          
          <Route path="/flights" exact>
            <NavBar/>
            <AvaliableFlights />
            <Footer />
          </Route>

          <Route path="/ibiza" exact>
            <NavBar/>
            <Ibiza />
            <Footer />
          </Route>

          <Route path="/capetown" exact>
            <NavBar/>
            <CapeTown />
            <Footer />
          </Route>

          <Route path="/milan" exact>
            <NavBar/>
            <Milan />
            <Footer />
          </Route>

          <Route path="/tokyo" exact>
            <NavBar/>
            <Tokyo />
            <Footer />
          </Route>

          <Route path="/services" exact>
            <NavBar/>
            <Services />
            <Footer />
          </Route>

        </Switch>
      
      </Router>
    </div>
  );
}

export default App;
