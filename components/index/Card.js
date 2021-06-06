import axios from 'axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Button from '../common/Button';

function Card(props) {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(props.image_api)
      .then((res) => {
        console.log(res.data);
        setImage(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.toString());
        setLoading(false);
        console.log(error);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps */

  const formattedDate = new Date(props.date).toLocaleDateString('en-gb', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  if (error) {
    return (
      <div className="card relative flex flex-col justify-center items-center w-full rounded-sm px-6 py-4 m-4 shadow-lg text-left">
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="card relative flex flex-col justify-center items-center w-full rounded-sm px-6 py-4 m-4 shadow-lg text-left">
        <p>
          <FontAwesomeIcon
            className="w-10 text-neutral-400 animate-spin"
            icon={faSpinner}
            spin
          />
        </p>
      </div>
    );
  }

  return (
    <div
      key={props.id}
      className="card h-full mb-10 relative flex flex-col justify-end items-center w-full rounded-sm px-6 py-4 shadow text-left">
      <div className="z-10 w-full mx-auto bg-white bg-opacity-90 backdrop-filter backdrop-blur-2xl shadow p-6 rounded-sm text-center">
        <div>
          <h2>{props.title.rendered}</h2>
          <p className="pb-4 mb-4 font-semibold border-b border-neutral-500">
            {formattedDate}
          </p>
          <div
            className="text-neutral-800 line-clamp-3"
            dangerouslySetInnerHTML={{
              __html: props.excerpt.rendered,
            }}></div>
        </div>
        <Button href={`detail/${props.slug}`}> Read full post</Button>
      </div>
      <img
        src={image.source_url}
        alt=""
        className="absolute rounded-sm z-0 inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

export default Card;
