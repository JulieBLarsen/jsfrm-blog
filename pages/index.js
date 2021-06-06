import Head from '../components/layout/Head';
import Layout from '../components/layout/Layout';
import Heading from '../components/common/Heading';
import Posts from '../components/index/Posts';

function Home() {
  return (
    <Layout>
      <Head />
      <Heading text="Blog posts" />
      <div className="grid grid-cols-5">
        <div className="col-span-3">
          <Posts />
        </div>

        <div>sidebar</div>
      </div>
    </Layout>
  );
}
export default Home;
