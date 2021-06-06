import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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
    return <p>{error}</p>;
  }

  if (loading) {
    return <p>Loading image..</p>;
  }

  return (
    <div
      key={props.id}
      className="relative min-h-96 flex flex-col justify-between w-full  px-6 py-4 m-4 shadow-lg text-left">
      <div className="z-10 bg-white">
        <div>
          <h2 className="mb-1">{props.title.rendered}</h2>
          <p className="text-indigo-600 mb-4 font-semibold">{formattedDate}</p>
          <div
            className="text-gray-600"
            dangerouslySetInnerHTML={{ __html: props.excerpt.rendered }}></div>
        </div>
        <Link href={`detail/${props.slug}`}>
          <a className="text-right pr-2 text-indigo-600 hover:text-indigo-500">
            Read more
          </a>
        </Link>{' '}
      </div>
      <img
        src={image.source_url}
        alt=""
        className="absolute z-0 inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

export default Card;
