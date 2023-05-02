import { useRef, useEffect, useState, useMemo } from "react";
import { Container, Row, Col } from "react-grid-system";
import Vivus from "vivus";
import useInviewPort from "../../hooks/useInviewPort";
import b from "../assets/svg/bluew.svg";
import o from "../assets/svg/orangew.svg";
import g from "../assets/svg/green.svg";
import "./style.scss";

const Post = (props) => {
  const [inView, setInview] = useState(null);
  const target = useRef(null);

  //   const i = useInviewPort(target);
  //   console.log(i)
  const observer = new IntersectionObserver(
    ([e]) => {
      console.log(e.isIntersecting);
      setInview(e.isIntersecting);
    },
    {
      threshold: 1,
      rootMargin: "100px",
    }
  );
  useEffect(() => {
    // runs each time target and observer change
    const containerRoot = document.querySelector(".post-list");
    observer.observe(containerRoot);

    // clean up

    return () => observer.disconnect();

    // console.log(target.current.children)
  }, [target, observer]);

  useEffect(() => {
    // create array of vivia isntance
    let varr = [];
    [1,2,3].map(i => {
      let vobj =  new Vivus(
          document.getElementById(`post-${i}`) , {
            duration:50
          }
      );
        varr.push(vobj)
        return 
    })
   
  },[]);

  return (
    <div ref={target} className="post-list">
      <h1 className="title">Ways to use Finify</h1>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4} lg={4} xl={4}>
            <div className="post">
              <div className="post-image">
                {/* <img src={b} alt="" /> */}
                <object
                  id="post-1"
                  className="img"
                  type="image/svg+xml"
                  data={b}
                ></object>
              </div>
              <div className="content">
                <h3>Stock Market</h3>
                <p>
                  New to finance? Use Finify to learn the basics of finance,
                  investing, and money management strategies.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={4}>
            <div className="post post-2">
              <div className="post-image">
              <object
                  id="post-2"
                  className="img"
                  type="image/svg+xml"
                  data={o}
                ></object>
                {/* <img src={o} alt="" /> */}
              </div>
              <div className="content">
                <h3>Stock Market</h3>
                <p>
                  New to finance? Use Finify to learn the basics of finance,
                  investing, and money management strategies.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={4}>
            <div  className="post post-3">
              <div className="post-image">
              <object
                  id="post-3"
                  className="img"
                  type="image/svg+xml"
                  data={g}
                ></object>
                {/* <img src={g} alt="" /> */}
              </div>
              <div className="content">
                <h3>Stock Market</h3>
                <p>
                  New to finance? Use Finify to learn the basics of finance,
                  investing, and money management strategies.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="button">
        <a href="#" className="btn">
          Create Free account
        </a>
      </div>
    </div>
  );
};

export default Post;
