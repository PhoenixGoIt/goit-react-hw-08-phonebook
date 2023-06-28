import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from './redux/auth/operation';

export const Layout = () => {
  const dispath = useDispatch()
  useEffect(() => {
    dispath(getUser())
  }, [dispath])
  return (
    <>
        <AppBar />
        <Suspense fallback={null}>
        <Outlet />
        </Suspense>
        </> 
  );
};
