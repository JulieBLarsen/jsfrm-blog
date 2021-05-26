import PropTypes from 'prop-types';
import NextHead from 'next/head';

function Head({ title = '' }) {
  return (
    <NextHead>
      <title>
        {title}
        {title ? ' | ' : ''}JS Frameworks CA
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,700&family=Merriweather:ital,wght@0,400;1,700&display=swap"
        rel="stylesheet"
      />
    </NextHead>
  );
}

Head.propTypes = {
  title: PropTypes.string,
};

export default Head;
