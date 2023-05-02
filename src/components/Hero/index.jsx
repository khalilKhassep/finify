import { useLayoutEffect, useState, useEffect , useRef } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { Container, Row, Col } from "react-grid-system";
import Vivus from "vivus";
import windowBox from "../assets/svg/window.svg";
import "./style.scss";
const Hero = (prop) => {
  const { refNode } = prop;
  // get header height and decrese it form hero section height
  // convert px to vh
  const [_h, setH] = useState(null);
  const size = useWindowSize();
  useEffect(() => {
      new Vivus('windowBox')
  }, []);

  useLayoutEffect(() => {
    if (refNode.current) {
      let h = refNode.current.offsetHeight;
      h = 100 * (h / size.height);
      h = 100 - h;

      setH(h);
    }
  }, [size]);

  // change height on window resize
  return (
    <section style={{ height: `${_h}vh` }} className="hero">
      <Container style={{ height: "100%" }}>
        <Row align="center" style={{ height: "100%" }}>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className="content-text">
              <h1 className="title">Finance Simplified through AI Chat</h1>
              <p className="content">
                The easiest way to to stay up to date on finance, stocks, and
                the latest financial news.
              </p>

              <a className="btn btn-primary" href="#">
                Sign Up
              </a>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={5} push={{ lg: 1 }}>
            <div className="window-box">
              <object id="windowBox"className="img"
                  type="image/svg+xml" data={windowBox}></object>
              {/* <img src={windowBox} alt="" /> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
