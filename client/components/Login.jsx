import React from 'react';
import Logo from '../public/logo.jpg';
import { Button, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const routeChange = () => {
    let path = '/signup';
    navigate(path);
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
          />
        </Form.Group>

        <Form.Group className='mb-4' controlId='sign-in-password'>
          <Form.Control
            type='password'
            size='sm'
            placeholder='Password'
            autoComplete='current-password'
            className='position-relative'
          />
        </Form.Group>

        <Form.Group
          className='d-flex justify-content-center mb-4'
          controlId='remember-me'
        >
          <Form.Check label='Remember me' />
        </Form.Group>

        <Button className='d-grid mb-1' variant='primary' size='sm'>
          Sign In
        </Button>

        <Button
          className='d-grid'
          variant='Warning'
          size='sm'
          onClick={routeChange}
        >
          Sign Up
        </Button>

        <p className='mt-4 text-muted'>&copy; 2022-2023</p>
      </Form>
    </Container>
  );
};

export default Login;
