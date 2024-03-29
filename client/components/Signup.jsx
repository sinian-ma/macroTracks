import React from 'react';
import Logo from '../public/logo.jpg';
import { Button, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const routeChange = () => {
    let path = '/';
    navigate(path);
  };

  let username;
  let password;
  let verifiedPassword;

  const registerUser = async () => {
    const attemptSignup = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({ username, password, verifiedPassword }),
    });

    const isSuccessfulSignup = await attemptSignup.json();

    if (!isSuccessfulSignup.err) {
      alert('Successfully signed up!');
      routeChange();
    } else {
      alert(isSuccessfulSignup.err);
      throw new Error(`Signup error! ${isSuccessfulSignup.err}`);
    }
  };

  return (
    <Container id='main-container' className='d-grid h-50'>
      <Form id='sign-in-form' className='text-center w-100'>
        <img className='mb-4 macro-logo' src={Logo} alt='MacroTracks' />
        <h1 className='mb-4 fs-4 fw-normal'>Please sign up.</h1>

        <Form.Group controlId='sign-in-username-address'>
          <Form.Control
            type='username'
            size='sm'
            placeholder='Username'
            autoComplete='username'
            className='position-relative'
            onChange={(e) => {
              username = e.target.value;
            }}
          />
        </Form.Group>

        <Form.Group controlId='sign-in-password'>
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

        <Form.Group className='mb-4' controlId='sign-in-password-verify'>
          <Form.Control
            type='password'
            size='sm'
            placeholder='Verify Password'
            autoComplete='current-password'
            className='position-relative'
            onChange={(e) => {
              verifiedPassword = e.target.value;
            }}
          />
        </Form.Group>

        <Button
          className='d-grid mb-1'
          variant='primary'
          size='sm'
          onClick={registerUser}
        >
          Sign Up
        </Button>

        <Button
          className='d-grid'
          variant='secondary'
          size='sm'
          onClick={routeChange}
        >
          Cancel
        </Button>

        <p className='mt-4 text-muted'>&copy; 2022-2023</p>
      </Form>
    </Container>
  );
};

export default Signup;
