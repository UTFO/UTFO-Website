import MainImage from "./MainImage";
import { AboutBlurb as About } from "./Blurbs/AboutBlurb";
import Article from "./Blurbs/ArticleBlurb";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <MainImage />
      <div className="about reveal">
        <div className="inner">
          <About />
        </div>
      </div>
      <div className="article reveal accent">
        <div className="inner">
          <Article />
        </div>
      </div>
    </div>
  );
}

export default Home;
