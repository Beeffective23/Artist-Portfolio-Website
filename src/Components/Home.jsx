import Header from "./Header";
import Videos from "./VideoHomePage";
import Footer from "./Pages/Footer";

import DecorPaintings from "./Pages/DecorPaintings";
function Home() {
  return (
    <div className="Home">
      <Header />
      <DecorPaintings />
      <Videos />
      <Footer clsName="homeAndPaintFoot" />
    </div>
  );
}

export default Home;
