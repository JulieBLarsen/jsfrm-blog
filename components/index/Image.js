import { useEffect, useState } from 'react';
import axios from 'axios';

function Image({ image_api }) {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(image_api);
  useEffect(() => {
    axios
      .get(image_api)
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

  if (error) {
    return <p>{error}</p>;
  }

  if (loading) {
    return <p>Loading image..</p>;
  }

  return (
    <div className="">
      <img src="" alt="" />
    </div>
  );
}

export default Image;
