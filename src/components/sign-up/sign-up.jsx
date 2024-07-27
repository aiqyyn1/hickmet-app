'use client';

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  TextField,
  Button,
  Container,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from '@mui/material';
import Link from 'next/link';

const SignUp = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch('password');

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
     sx={{justifyContent:'center', flexDirection:'column', display:'flex', alignItems:'center', height:'100vh'}}
    >
      <Typography component="h1" variant="h5" className="flex justify-center">
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{ required: 'Name required' }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Name"
              required
              fullWidth
              margin="normal"
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : ''}
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          rules={{ required: 'Last Name required' }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Last Name"
              required
              fullWidth
              margin="normal"
              error={!!errors.lastName}
              helperText={errors.lastName ? errors.lastName.message : ''}
            />
          )}
        />
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
          rules={{
            required: 'Password required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            },
          }}
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
        <Controller
          name="confirmPassword"
          control={control}
          defaultValue=""
          rules={{
            required: 'Confirm password required',
            validate: (value) => value === password || 'The passwords do not match',
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Confirm Password"
              type="password"
              required
              fullWidth
              margin="normal"
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
            />
          )}
        />
        <Controller
          name="role"
          control={control}
          defaultValue=""
          rules={{ required: 'Role required' }}
          render={({ field }) => (
            <FormControl fullWidth margin="normal" error={!!errors.role}>
              <InputLabel>Role</InputLabel>
              <Select {...field} label="Role">
                <MenuItem value="volunteer">Volunteer</MenuItem>
                <MenuItem value="pilgrim">Pilgrim</MenuItem>
              </Select>
              <FormHelperText>{errors.role ? errors.role.message : ''}</FormHelperText>
            </FormControl>
          )}
        />
        <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
          Sign Up
        </Button>
      </form>
      <Link href="/login" className='text-neutral-600'>Are you already have an account ?</Link>
    </Container>
  );
};

export default SignUp;
