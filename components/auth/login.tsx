'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Input } from '@nextui-org/react';
import { Formik } from 'formik';
import { createAuthCookie } from '@/actions/auth.action';
import { LoginSchema } from '@/helpers/schemas';
import { LoginFormType } from '@/helpers/types';

export const Login = () => {
  const router = useRouter();

  const initialValues: LoginFormType = {
    email: 'info@virtulynx.ca',
    password: 'info',
  };

  const handleLogin = useCallback(
    async (values: LoginFormType) => {
      await createAuthCookie();
      router.replace('/');
    },
    [router],
  );

  return (
    <>
      <div className="text-center text-[25px] font-bold mb-6">
        Login with your Facebook Marketplace account
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <>
            <div className="flex flex-col w-1/2 gap-4 mb-4">
              <Input
                variant="bordered"
                label="Email"
                type="email"
                value={values.email}
                isInvalid={!!errors.email && !!touched.email}
                errorMessage={errors.email}
                onChange={handleChange('email')}
              />
              <Input
                variant="bordered"
                label="Password"
                type="password"
                value={values.password}
                isInvalid={!!errors.password && !!touched.password}
                errorMessage={errors.password}
                onChange={handleChange('password')}
              />
            </div>

            <Button
              onPress={() => handleSubmit()}
              variant="flat"
              color="primary"
            >
              Login
            </Button>
          </>
        )}
      </Formik>

      <div className="font-light text-slate-400 mt-4 text-sm">
        Don&apos;t have an account?{' '}
        <Link
          href="https://www.facebook.com/marketplace/learn-more/"
          className="font-bold"
        >
          Register on Facebook Marketplace first
        </Link>
      </div>
    </>
  );
};
