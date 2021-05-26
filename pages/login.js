import Head from '../components/layout/Head';
import Layout from '../components/layout/Layout';
import Heading from '../components/common/Heading';
import { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import { BASE_URL, TOKEN_PATH } from '../constants/api';

const url = BASE_URL + 'wp-json/' + TOKEN_PATH;

const schema = yup.object().shape({
  username: yup.string().required('Please enter your username'),
  password: yup.string().required('Please enter your password'),
});

function Login() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [auth, setAuth] = useContext(AuthContext);
  const router = useRouter();

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    try {
      const response = await axios.post(url, data);
      console.log('response', response.data);
      setAuth(response.data);
      router.push('/admin');
    } catch (error) {
      console.log('error', error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <Layout>
      <Head title="Log in" />
      <Heading text="Login" />
      <div className="max-w-4xl mx-auto">
        {auth ? (
          <p>logged in</p>
        ) : (
          <>
            {loginError}
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset disabled={submitting}>
                <div className="mt-14 shadow-lg overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6 text-left">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium text-gray-700">
                          Username
                        </label>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          autoComplete="username"
                          ref={register}
                          className="mt-2 py-2 px-3"></input>
                        {errors.username && errors.username.message}
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium text-gray-700">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          autoComplete="password"
                          ref={register}
                          className="mt-2 py-2 px-3"></input>
                        {errors.password && errors.password.message}
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 flex flex-col md:flex-row justify-end items-center">
                    <div className="pr-4">{loginError}</div>

                    <button
                      type="submit"
                      className=" text-white bg-indigo-600 hover:bg-indigo-500 rounded py-2 px-4 m-0">
                      {submitting ? 'Logging in' : 'Log in'}
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>
          </>
        )}
      </div>
    </Layout>
  );
}
export default Login;
