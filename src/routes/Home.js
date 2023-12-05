import { Helmet } from 'react-helmet';

// import Footer from '../components/Footer';
import Header from '../components/Header';
// import MainGrid from '../components/MainGrid';
import EventView from '../components/home/EventView';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>SPACEPIC</title>
      </Helmet>

      <Header currMenu="Home" />
      <EventView />
      {/* <Footer /> */}
    </>
  );
}
