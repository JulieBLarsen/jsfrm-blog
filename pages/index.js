import Head from '../components/layout/Head';
import Layout from '../components/layout/Layout';
import Posts from '../components/index/Posts';
import Sidebar from '../components/layout/sidebar/Sidebar';

function Home() {
  return (
    <Layout>
      <Head />

      <div className="grid grid-cols-4 gap-4 lg:gap-10 max-w-7xl mx-auto p-6 bg-white  rounded-sm shadow-lg">
        <div className="col-span-4 md:col-span-3">
          <Posts />
        </div>
        <div className="col-span-4 md:col-span-1">
          <Sidebar />
        </div>
      </div>
    </Layout>
  );
}
export default Home;
