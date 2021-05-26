import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/api';
import Card from './Card';

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
      <div className="container max-w-4xl mx-auto p-10 bg-white  shadow-lg sm:rounded-md  text-center">
        <p>{error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container max-w-4xl mx-auto p-10 bg-white  shadow-lg sm:rounded-md text-center">
        <p>Loading..</p>
      </div>
    );
  }

  return (
    <div className="posts container mx-auto flex flex-wrap justify-center">
      {posts.map((post) => {
        const { id, title, date, excerpt, slug } = post;
        return (
          <Card
            key={id}
            id={id}
            title={title}
            date={date}
            excerpt={excerpt}
            slug={slug}
          />
        );
      })}
    </div>
  );
}

export default Posts;
