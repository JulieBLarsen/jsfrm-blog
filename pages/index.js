import Head from '../components/layout/Head';
import Layout from '../components/layout/Layout';
import Heading from '../components/common/Heading';
import Posts from '../components/index/Posts';

function Home() {
  return (
    <Layout>
      <Head />
      <Heading text="Blog posts" />
      <Posts />
    </Layout>
  );
}
export default Home;
