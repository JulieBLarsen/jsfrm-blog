import axios from 'axios';
import { BASE_URL } from '../../constants/api';
import Head from '../../components/layout/Head';
import Layout from '../../components/layout/Layout';
import Heading from '../../components/common/Heading';

function Post({ post }) {
  console.log(post);
  const formattedDate = new Date(post.date).toLocaleDateString('en-gb', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  return (
    <Layout>
      <Head />
      <Heading text={post.title.rendered} />
      <div className="container max-w-4xl mx-auto p-10 bg-white  shadow-lg sm:rounded-md">
        <p className="text-indigo-600 mb-8 text-center font-semibold">
          {formattedDate}
        </p>
        <div
          className="text-gray-600"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
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
