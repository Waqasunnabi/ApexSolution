import { PropsWithChildren } from 'react'; // Import PropsWithChildren type from react
import Navbar from "./navbar"; // Import Navbar component

const Layout = ({ children }: PropsWithChildren) => { // Destructure children from PropsWithChildren type
  return (
    <> {/* React fragment shorthand */}
      <Navbar /> {/* Render Navbar component */}
      {children} {/* Render children */}
    </>
  );
};

export default Layout; // Export Layout component as default
