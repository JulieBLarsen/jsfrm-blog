import PropTypes from 'prop-types';
import Footer from './Footer';
import Navbar from './navbar/Navbar';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto">{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Layout;
