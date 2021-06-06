import axios from 'axios';
import { BASE_URL, MEDIA_URL } from '../../constants/api';
import Head from '../../components/layout/Head';
import Layout from '../../components/layout/Layout';
import { PostHeading } from '../../components/common/Heading';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../components/layout/sidebar/Sidebar';

function Post({ post }) {
  console.log(post);

  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const imageUrl = BASE_URL + MEDIA_URL + post.featured_media;
  useEffect(() => {
    axios
      .get(imageUrl)
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

  const formattedDate = new Date(post.date).toLocaleDateString('en-gb', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  if (error) {
    return (
      <Layout>
        <Head />
        <div className="grid grid-cols-4  gap-4 lg:gap-10 max-w-7xl mx-auto p-6 bg-white  rounded-sm shadow-lg">
          <div className="col-span-3 mx-auto">
            <h2>Something went wrong!</h2>
            <p>{error}</p>
          </div>
          <div className="col-span-1">
            <Sidebar />
          </div>
        </div>
      </Layout>
    );
  }

  if (loading) {
    return (
      <Layout>
        <Head />
        <div className="grid grid-cols-4  gap-4 lg:gap-10 max-w-7xl mx-auto p-6 bg-white  rounded-sm shadow-lg">
          <div className="col-span-3 mx-auto">
            <p>
              <FontAwesomeIcon
                className="w-10 text-neutral-700"
                icon={faSpinner}
                spin
              />
            </p>
          </div>
          <div className="col-span-1">
            <Sidebar />
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head />
      <div className="grid grid-cols-4  gap-4 lg:gap-10 max-w-7xl mx-auto p-6 bg-white  rounded-sm shadow-lg">
        <div className="post__single col-span-4 md:col-span-3">
          <PostHeading text={post.title.rendered} />
          <div className="relative h-xxl w-full">
            <img
              src={image.source_url}
              alt=""
              className="absolute rounded-sm z-0 inset-0 w-full h-full object-cover"
            />
          </div>
          <p className="mb-8 py-4 text-center font-semibold bg-neutral-50 border-teal-neutral border-t border-b">
            Posted at {formattedDate}
          </p>
          <div
            className="text-gray-600"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
        </div>
        <div className="col-span-4 md:col-span-1">
          <Sidebar />
        </div>
      </div>
    </Layout>
  );
}

export default Post;

export async function getStaticPaths() {
  try {
    const res = await axios.get(BASE_URL + 'wp-json/wp/v2/posts');
    console.log(res.data);
    const posts = res.data;

    return {
      paths: posts.map((post) => ({
        params: {
          slug: post.slug,
        },
      })),
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  let post = null;
  try {
    const res = await axios.get(
      `${BASE_URL}wp-json/wp/v2/posts?slug=${params.slug}`
    );
    post = res.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: { post: post[0] },
  };
}
