import React, { useContext } from 'react';
import { UserContext } from '../App.jsx';
import Logo from '../public/logo.jpg';
import { Button, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const user = useContext(UserContext);

  const signUpPage = () => {
    let path = '/signup';
    navigate(path);
  };

  const loggedInPage = () => {
    let path = '/home';
    navigate(path);
  };

  let email;
  let password;

  const signin = async () => {
    if (!email) {
      return alert('Please enter your email.');
    }

    if (!password) {
      return alert('Please enter your password');
    }

    const attemptLogin = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({ email, password }),
    });

    const isSuccessfulLogin = await attemptLogin.json();

    if (isSuccessfulLogin) {
      user.setLoggedIn(true);
      loggedInPage();
    }
  };

  return (
    <Container id='main-container' className='d-grid h-50'>
      <Form id='sign-in-form' className='text-center w-100'>
        <img className='mb-4 macro-logo' src={Logo} alt='MacroTracks' />
        <h1 className='mb-4 fs-4 fw-normal'>Please sign in.</h1>

        <Form.Group controlId='sign-in-email-address'>
          <Form.Control
            type='email'
            size='sm'
            placeholder='Email address'
            autoComplete='username'
            className='position-relative'
            onChange={(e) => {
              email = e.target.value;
            }}
          />
        </Form.Group>

        <Form.Group className='mb-4' controlId='sign-in-password'>
          <Form.Control
            type='password'
            size='sm'
            placeholder='Password'
            autoComplete='current-password'
            className='position-relative'
            onChange={(e) => {
              password = e.target.value;
            }}
          />
        </Form.Group>

        <Form.Group
          className='d-flex justify-content-center mb-4'
          controlId='remember-me'
        >
          <Form.Check label='Remember me' />
        </Form.Group>

        <Button
          className='d-grid mb-1'
          variant='primary'
          size='sm'
          onClick={signin}
        >
          Sign In
        </Button>

        <Button
          className='d-grid'
          variant='Warning'
          size='sm'
          onClick={signUpPage}
        >
          Sign Up
        </Button>

        <p className='mt-4 text-muted'>&copy; 2022-2023</p>
      </Form>
    </Container>
  );
};

export default Login;
