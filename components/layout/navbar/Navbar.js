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
      <div className="w-100 mb-20 bg-white text-center">
        <p className=" text-indigo-600 hover:text-indigo-500 font-bold text-2xl mt-4">
          This is a blog
        </p>
        <nav className="flex justify-center mx-auto">
          <Navlink href="/" text="Home" />
          <Navlink href="/contact" text="Contact" />

          {auth ? (
            <>
              <Navlink href="/admin" text="Admin" />
              <div className="flex items-center">
                <button
                  className="ml-4 bg-indigo-600 rounded hover:bg-indigo-500  text-white text-sm py-1 px-4"
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
