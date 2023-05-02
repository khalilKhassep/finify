import { useRef } from "react";
// import { Container } from "react-grid-system";
import './components/style/responsive.scss';
import "./App.css";
import Menu from "./components/menu/Menu";
import Hero from "./components/Hero";
import FeaturedIn from "./components/FeaturedIn";
import Post from "./components/Post";
import Image from './components/Image'
import Video from "./components/Video";
import FQA from "./components/FQA";
import Footer from "./components/Footer";
function App() {
  const _h = useRef(null);
  return (
    <>
      <header ref={_h}>
        <Menu></Menu>
      </header>

      <div className="outer-container">
        <Hero refNode={_h} />
      </div>
      <section className="section featured-in pt">
        <FeaturedIn />
      </section>
      <section  className="posts section">
        <Post />
      </section>
      
      <section className="section  pt">
          <Image />
      </section>

      <section className="section pb video-sectoin">
          <Video />
      </section>

      <section className="section pb">
        <FQA />
      </section>

      <Footer />
    </>
  );
}

export default App;
