import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Ibiza from './components/pages/Ibiza';
import Payment from './components/pages/Payment';
import Footer from './components/Footer'
import Login from './components/Login'
import {useEffect} from 'react';
import {useStateValue} from './StateProvider';
import {auth} from './firebase';
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
          
          <Route path="/ibiza" exact>
            <NavBar/>
            <Ibiza />
            <Footer />
          </Route>
          {/* <Route path="/milan" exact component={Ibiza} />
          <Route path="/tokyo" exact component={Ibiza} />
          <Route path="/south-africa" exact component={Ibiza} />
          <Route path="/book-now" exact component={Payment} /> */}
        </Switch>
      
      </Router>
    </div>
  );
}

export default App;
