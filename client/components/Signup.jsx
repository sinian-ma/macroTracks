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

  let email;
  let password;
  let verifiedPassword;

  const validEmail = (inputText) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
      return true;
    }
    return false;
  };

  const registerUser = () => {
    let errorMessage = '';
    if (!validEmail(email)) {
      errorMessage = 'Invalid email.';
    }
    if (password !== verifiedPassword) errorMessage = 'Passwords do not match.';

    if (errorMessage) {
      return alert(errorMessage);
    }

    const register = async () => {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data) {
        alert('Successfully signed up!');
        routeChange();
      }
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    };

    register();
  };

  return (
    <Container id='main-container' className='d-grid h-50'>
      <Form id='sign-in-form' className='text-center w-100'>
        <img className='mb-4 macro-logo' src={Logo} alt='MacroTracks' />
        <h1 className='mb-4 fs-4 fw-normal'>Please sign up.</h1>

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
