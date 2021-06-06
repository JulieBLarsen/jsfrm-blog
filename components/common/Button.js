import Link from 'next/link';

function Button({ href, children }) {
  return (
    <Link href={href}>
      <a className="px-6 py-2 mt-6 inline-block uppercase text-sm transition   bg-coral hover:bg-teal">
        {children}
      </a>
    </Link>
  );
}
export function SubmitButton({ children }) {
  return (
    <button
      type="submit"
      className="px-6 py-2 mt-6 inline-block uppercase font-semibold transition bg-coral hover:bg-teal focus:outline-none">
      {children}
    </button>
  );
}
export default Button;
