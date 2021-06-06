import '../styles/style.css';
import 'tailwindcss/tailwind.css';
import { AuthProvider } from '../context/AuthContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCoffee,
  faSearch,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
library.add(fab, faCoffee, faSearch, faSpinner);
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
