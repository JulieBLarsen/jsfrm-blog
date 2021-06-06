import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL, MEDIA_URL } from '../../constants/api';
import Card from './Card';
import Heading from '../common/Heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Posts() {
  const [posts, setposts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(BASE_URL + 'wp-json/wp/v2/posts')
      .then((res) => {
        console.log(res.data);
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
      <div>
        <Heading text="Something went wrong!" />
        <p className="text-center">{error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <FontAwesomeIcon
        className="w-10 text-neutral-400 animate-spin text-center mx-auto"
        icon={faSpinner}
        spin
      />
    );
  }

  return (
    <div className="posts container w-full">
      <Heading text="Latest Blog Posts" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {posts.map((post) => {
          const { id, title, date, excerpt, slug } = post;
          const featured_image = BASE_URL + MEDIA_URL + post.featured_media;
          return (
            <Card
              key={id}
              id={id}
              title={title}
              date={date}
              excerpt={excerpt}
              slug={slug}
              image_api={featured_image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
