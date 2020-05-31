import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';
import { setCurrentUser } from './redux/User/user.actions';

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


const App = props => {
  const { setCurrentUser, currentUser } = props;

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        })
      }

      setCurrentUser(userAuth);
    });

    return () => {
      authListener();
    };
    
  }, []);

    /*
      super(props);
      this.state = {
        ...initialState
      };
    }
    */


  componentDidMount(){
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }

      this.setState({
        ...initialState
      });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }
/*
////////////////////////////////////////////////////////////////////////////////

  componentDidMount(){
    this.authListener = auth.onAuthStateChanged(userAuth => {
      if (!userAuth){
          this.setState({
            ...initialState
          });
        };
        
        this.setState({
          currentUser: userAuth
        });
      });
    }

    componentWillUnmount (){
      this.authListener();
      }

      render(){
        const {currentUser} = this.State;

        ////////////////////////////////////////////////////////////////////////////////
      */  
            
      return (
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => (
              <HomepageLayout>   {/* currentUser={currentUser}>  */}
                <Homepage />
              </HomepageLayout>
            )}
            />
            <Route path="/registration" render={() => currentUser ? Redirect to="/" /> : (
              <MainLayout>   {/* currentUser={currentUser}>  */}
                <Registration />
              </MainLayout>
            )} />
            <Route path="/login" 
            render={() => currentUser ? <Redirect to="/" /> : (
              <MainLayout currentUser={currentUser}>
                  <Login />
                </MainLayout>
              )} />
            <Route path="/recovery" render={() => (
              <MainLayout currentUser={currentUser}>
                <Recovery />
              </MainLayout>
            )} />
            <Route path="/dashboard" render={() => (
              <WithAuth>
                <MainLayout currentUser={currentUser}>
                  <Dashboard />
                </MainLayout>
              </WithAuth>
            )} />
          </Switch>
        </div>
      );
    }
  
  
    /*  
    
  const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
  });

  const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  });

export default connect(mapStateToProps, mapDispatchToProps)(App);



*/