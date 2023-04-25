import { PropsWithChildren, ReactNode } from 'react';
import Navbar from './navbar';

type LayoutProps = PropsWithChildren<{}>;

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar/>
      {children}
    </>
  );
};

export default Layout;
