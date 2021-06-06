import PropTypes from 'prop-types';

function Heading({ text }) {
  return (
    <h1 className="font-bold uppercase text-2xl my-4 mb-8 text-center">
      {text}
    </h1>
  );
}
export function PostHeading({ text }) {
  return (
    <h1 className="handwritten text-6xl text-center px-10 py-6">{text}</h1>
  );
}
Heading.propTypes = {
  text: PropTypes.string.isRequired,
};
PostHeading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;
