import axios from 'axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { BASE_URL, MEDIA_URL } from '../../../constants/api';
import SingleLatestPost from './SingleLatestPost';

function LatestPosts() {
  const [posts, setposts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(BASE_URL + 'wp-json/wp/v2/posts?per_page=4')
      .then((res) => {
        setposts(res.data);
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
      <div className="mx-auto text-center">
        <h3 className="font-semibold">Latest posts:</h3>
        <p>Couldn't load posts.</p>
        <p>{error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="mx-auto text-center">
        <h3 className="font-semibold">Latest posts:</h3>
        <div className="w-full py-5 h-40 mx-auto text-center">
          <p>
            <FontAwesomeIcon
              className="w-6 text-neutral-300 text-center mx-auto animate-spin"
              icon={faSpinner}
              spin
            />
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="font-semibold">Latest posts:</h3>
      <div className="flex flex-wrap">
        {posts.map((post) => {
          const featured_image = BASE_URL + MEDIA_URL + post.featured_media;

          return (
            <SingleLatestPost
              key={post.id}
              title={post.title}
              slug={post.slug}
              image_api={featured_image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default LatestPosts;
