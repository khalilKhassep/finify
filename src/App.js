import { useEffect, useRef, useState } from "react";
// import { Container } from "react-grid-system";
import "./components/style/responsive.scss";
import "./App.css";
import Menu from "./components/menu/Menu";
import Hero from "./components/Hero";
import FeaturedIn from "./components/FeaturedIn";
import Post from "./components/Post";
import Image from "./components/Image";
import Video from "./components/Video";
import FQA from "./components/FQA";
import Footer from "./components/Footer";
import queryContext from "./queryContext";
function App() {
  const [qEelemnt , setQ] = useState(null)
  const Qref = useRef(null)
  useEffect(() => {
    console.log(queryContext);
    setQ(Qref.current)
  } , [Qref]);
  const _h = useRef(null);
  return (
    <div ref={Qref}>
      {/* <queryContext.Provider value={qEelemnt}> */}
        <header ref={_h}>
          <Menu></Menu>
        </header>

        <div className="outer-container">
          <Hero refNode={_h} />
        </div>
        <section className="section featured-in pt">
          <FeaturedIn />
        </section>
        <section className="posts section">
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
      {/* </queryContext.Provider> */}
    </div>
  );
}

export default App;

/*
 TODO: create a global dom selector for you the whole app and provide it with context 
 steps 

   - create context Node for the app 
   - asing the container app element to ref
   - update context node with the refence value
   - porvide context to component needed 
   - create a heleper select function 

*/
