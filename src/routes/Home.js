import FirstPage from "../components/FirstPage";
import GalleryView from "../components/GalleryView";
import MiddleSlide from "../components/MiddleSlide";
import ReloadBtn from "../components/ReloadBtn";

export default function Home() {
  return (
    <>
      <FirstPage />
      <MiddleSlide />
      <GalleryView />
      <ReloadBtn />
    </>
  );
}
