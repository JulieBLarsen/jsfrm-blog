import Navlink from './Navlink';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import AuthContext from '../../../context/AuthContext';

export default function Navbar() {
  const [auth, setAuth] = useContext(AuthContext);

  const router = useRouter();

  function logout() {
    setAuth(null);
    router.push('/');
  }

  return (
    <>
      <div className="w-100 mb-20  bg-coral-light text-center">
        <p className="handwritten cursor-pointer text-neutral-900 hover:text-neutral-700 text-6xl mt-4">
          Cara Loves Coffee
        </p>
        <nav className="flex flex-wrap justify-center mx-auto">
          <Navlink href="/" text="Posts" />
          <Navlink href="/contact" text="Contact" />

          {auth ? (
            <>
              <Navlink href="/admin" text="Admin" />
              <div className="flex items-center">
                <button
                  className="ml-4 bg-teal-dark hover:bg-neutral-600 font-semibold tracking-wider uppercase  text-white text-sm py-2 px-4 rounded-sm focus:outline-none outline-none"
                  onClick={logout}>
                  Log out
                </button>
              </div>
            </>
          ) : (
            <Navlink href="/login" text="Log in" />
          )}
        </nav>
      </div>
    </>
  );
}
