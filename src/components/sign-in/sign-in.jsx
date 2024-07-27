'use client';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';
import { login } from '../../utils/auth';
const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await login(data);
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        justifyContent: 'center',
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: 'Email required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address',
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email Address"
              required
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ''}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{ required: 'Password required' }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Password"
              type="password"
              required
              fullWidth
              margin="normal"
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ''}
            />
          )}
        />
        <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
          Sign In
        </Button>
      </form>
      <Link href="/register" className="text-neutral-600">
        No account?
      </Link>
    </Container>
  );
};

export default SignIn;
