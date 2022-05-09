import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from './LoginPage';
import Payment from './Payment';
import { useEffect } from 'react';
import { auth } from './firebase'
import { useStateValue } from './StateProvider';



function App() {
  const [{}, dispatch] =  useStateValue()

  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
          <Route 
            path="/payment"
            element={<>
            <Header/>
            <Payment />
            </>}
          />
          <Route 
            path="/login"
            element={<LoginPage/>}
          />
          <Route 
            path="/checkout"
            element={<>
              <Header/> 
              <Checkout/>
              </>}
          />
          <Route 
            path="/"
            element={<>
            <Header/>
            <Home />
            </>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
