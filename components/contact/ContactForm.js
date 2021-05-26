import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  firstname: yup
    .string()
    .required('Please enter your first name')
    .min(3, 'Must be at least 3 characters'),
  lastname: yup
    .string()
    .required('Please enter your last name')
    .min(4, 'Must be at least 4 characters'),
  email: yup
    .string()
    .required('Please enter an email address')
    .email('Please enter a valid email address'),
  subject: yup.string().required('Choose a subject'),
  message: yup
    .string()
    .required('Please enter your message')
    .min(10, 'The message must be at least 10 characters'),
});

function ContactForm() {
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const [submitMessage, setSubmitMessage] = useState('');

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setSubmitMessage(<p>Form submitted</p>);
  };
  return (
    <div className="container max-w-4xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-14 shadow-lg overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6 text-left">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  autoComplete="givenname"
                  ref={register}
                  className="mt-2 py-2 px-3"></input>
                {errors.firstname && errors.firstname.message}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  autoComplete="familyname"
                  ref={register}
                  className="mt-2 py-2 px-3"></input>
                {errors.lastname && errors.lastname.message}
              </div>
              <div className="col-span-6 sm:col-span-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="email"
                  ref={register}
                  className="mt-2 py-2 px-3"></input>
                {errors.email && errors.email.message}
              </div>
              <div className="col-span-6 sm:col-span-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  ref={register}
                  className="mt-2 py-2 px-3">
                  <option value="question">Question</option>
                  <option value="suggestion">Suggestion</option>
                  <option value="report">Report</option>
                  <option value="contact">Contact</option>
                </select>
                {errors.subject && errors.subject.message}
              </div>
              <div className="col-span-6 sm:col-span-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    ref={register}
                    className="mt-2 py-2 px-3"></textarea>
                </div>
                {errors.message && errors.message.message}
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 flex flex-col md:flex-row justify-end items-center">
            <div className="pr-2">{submitMessage}</div>
            <button
              type="submit"
              className=" text-white bg-indigo-600 hover:bg-indigo-500 rounded py-2 px-4 m-0">
              Send message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
