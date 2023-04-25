import { PropsWithChildren, ReactNode } from 'react';
import Navbar from './navbar';

const Layout = ({ children }: PropsWithChildren<ReactNode>) => {
  return (
    <>
      <Navbar/>
      {children}
    </>
  );
};

export default Layout;
