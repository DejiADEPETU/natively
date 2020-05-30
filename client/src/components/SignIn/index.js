import React, { useState, Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import './styles.scss';
import { signInWithGoogle, auth } from './../../firebase/utils';

import AuthWrapper from './../AuthWrapper';
import FormInput from './../forms/FormInput';
import Button from './../forms/Button';

const SignIn = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      resetForm();
      props.history.push('/');

    } catch (err) {
      // console.log(err);
    }
  }

  const configAuthWrapper = {
    headline: 'LogIn'
  };

  //////////////////////////////////////

  const initialState = {
    email:'',
    password:''
  }:

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      ...initialState
    };
  
    this.handleChange = this.handleChange.bind.(this);
  }
  
  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]:value
    });
  }

  handleSubmit = async e =>{
    e.preventDefault();
  }

  render (){
    const {email,password} = this.state;

    return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        <form onSubmit={handleSubmit}>   {/*<form> onSubmit={handleSubmit}>   </form> */}

          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={e => setEmail(e.target.value)}
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={e => setPassword(e.target.value)}
          />

          <Button type="submit">
            LogIn
          </Button>

          <div className="socialSignin">
            <div className="row">
              <Button onClick={signInWithGoogle}>
                Sign in with Google
              </Button>
            </div>
          </div>

          <div className="links">
            <Link to="/recovery">
              Reset Password
            </Link>
          </div>

        </form>
      </div>
    </AuthWrapper>
  );
}

export default withRouter(SignIn);
