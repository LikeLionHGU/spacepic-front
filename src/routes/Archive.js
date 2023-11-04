import { Helmet } from 'react-helmet';

import Footer from '../components/Footer';
import Header from '../components/Header';
import ArchiveGrid from '../components/archiveGrid';

export default function Archive() {
  return (
    <>
      <Helmet>
        <title>SPACEPIC</title>
      </Helmet>

      <Header />

      <ArchiveGrid />

      <Footer />
    </>
  );
}
