import Head from '../components/layout/Head';
import Layout from '../components/layout/Layout';
import Heading from '../components/common/Heading';
import ContactForm from '../components/contact/ContactForm';

export default function Contact() {
  return (
    <Layout>
      <Head title="Contact" />
      <Heading text="Contact" />
      <ContactForm />
    </Layout>
  );
}
