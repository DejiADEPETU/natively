import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';
import { setCurrentUser } from './redux/User/user.actions';
// import ShopMen from './pages/Collections/Tx';
// import ShopWomen from './assets/img/collections/ShopWomen';
// hoc
import WithAuth from './hoc/withAuth';

// layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';

// pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';
import './default.scss';
import Tx from './pages/Collections/Tx';


const App = props => {
  // const dispatch = useDispatch();   
  const { setCurrentUser, currentUser } = props;

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          // dispatch (setCurrentUser({   
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
            // }));
            });
        })
      }

      // dispatch(setCurrentUser(userAuth));   
      setCurrentUser(userAuth);
    });

    return () => {
      authListener();
    };
  }, []);
            
      return (
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => (
              <HomepageLayout> 
                <Homepage />
              </HomepageLayout>
            )}
            />

s
            <Route exact path="/tx" render={() => (
              <HomepageLayout> 
                <Tx />
              </HomepageLayout>
            )}
            />


            
             <Route path="/registration" render={() => (
            // <Route path="/registration" render={() => currentUser ? <Redirect to="/" /> : ( 
              <MainLayout>  
                <Registration />
              </MainLayout>
            )} />
            <Route path="/login" 
            render={() => (
            // render={() => currentUser ? <Redirect to="/" /> : (
              <MainLayout >
                  <Login />
                </MainLayout>
              )} />
            <Route path="/recovery" render={() => (
              <MainLayout>
                <Recovery />
              </MainLayout>
            )} />
            <Route path="/dashboard" render={() => (
              <WithAuth>
                <MainLayout>
                  <Dashboard />
                </MainLayout>
              </WithAuth>
            )} />
          </Switch>
        </div>
      );
    }
  

    const mapStateToProps = ({ user }) => ({
      currentUser: user.currentUser
    });
  
    const mapDispatchToProps = dispatch => ({
      setCurrentUser: user => dispatch(setCurrentUser(user))
    });
//}  
  export default connect(mapStateToProps, mapDispatchToProps)(App);
  
  /*
 function App(){
 return (
  <div className="App"> 
  <Tx/>
  </div>
)
}
 export default App;

*/



  {/* <Route exact path="/shopmen" render={() => (
              <HomepageLayout> 
                <ShopMen />
              </HomepageLayout>
            )}
            />

            <Route exact path="/shopwomen" render={() => (
              <HomepageLayout> 
                <ShopWomen />
              </HomepageLayout>
            )} 
            />
            
            <Route exact path="/" render={() => (
              <HomepageLayout> 
                <Homepage />
              </HomepageLayout>
            )}
            /> */}