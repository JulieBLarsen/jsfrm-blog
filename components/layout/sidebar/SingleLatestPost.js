import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

function SingleLatestPost({ title, image_api, slug }) {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(image_api)
      .then((res) => {
        setImage(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.toString());
        setLoading(false);
        console.log(error);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps */

  if (error) {
    return (
      <div className="w-full mx-auto text-center">
        <p>{error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="w-full  py-5 h-40 mx-auto text-center">
        <p>
          <FontAwesomeIcon
            className="w-6 text-neutral-300 text-center mx-auto animate-spin"
            icon={faSpinner}
            spin
          />
        </p>
      </div>
    );
  }
  return (
    <div className="relative py-5 max-w-sm mx-auto">
      <Link href={`/detail/${slug}`}>
        <img
          src={image.source_url}
          alt=""
          className="cursor-pointer transition hover:opacity-80"
        />
      </Link>
      <div className="absolute inset-x-0 bottom-0">
        <Link href={`/detail/${slug}`}>
          <a className="px-6 py-2 mt-6 inline-block uppercase text-sm transition bg-coral hover:bg-teal">
            {title.rendered}
          </a>
        </Link>
      </div>
    </div>
  );
}

export default SingleLatestPost;
