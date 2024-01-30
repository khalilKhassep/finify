import { useRef, useState } from "react";
import { Container, Row, Col, Visible, Hidden } from "react-grid-system";
import { Transition } from "react-transition-group";
import logo from "../assets/svg/logo.svg";
import menuIcon from "../assets/svg/menulines.svg";
import iconClose from "../assets/svg/close.svg";
import "./styles/menu.scss";
const Menu = (props) => {
  const [open, setOpen] = useState(false);
  const refNode = useRef(null);
  const duration = 150;
  const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    left: "-100%",
  };
  const transitionStyle = {
    entering: {
      left: 0,
    },
    entered: {
      left: 0,
    },
    exiting: {
      left: "100%",
    },
    exited: {
      left: "100%",
    },
  };

  const modalTranstionCallback = () => {
    setOpen(!open);
  };

  return (
    <Container style={{ position: "relative" }}>
      <Row justify={{
        xs:"space-between"
      }}>
        <Col xs={5} sm={3} md={3} lg={3} >
          <div className="logo">
            <img className="img-responsive" src={logo} alt="" />
          </div>
        </Col>
        <Col xs={2} sm={9} md={9}  style={{ textAlign: "right" }}>
          <Hidden xs sm >
            <nav className="nav">
              <ul className="menu">
                <li className="menu-item">
                  <a href="#">How it works</a>
                </li>
                <li className="menu-item">
                  <a href="#">Sign up</a>
                </li>
                <li className="menu-item">
                  <a className="btn" href="#">
                    Login
                  </a>
                </li>
              </ul>
            </nav>
          </Hidden>
          <Visible xs sm>
            <div className="mobail-nav-icon"
              style={{
                // display: "flex",
                // height: "100%",
                // alignContent: "center",
              }}
            >
              <img
                onClick={modalTranstionCallback}
                src={menuIcon}
                alt="menu icon"
              />
            </div>
          </Visible>
        </Col>
      </Row>

      <Transition ref={refNode} in={open} timeout={duration}>
        {(state) => (
          <div
            ref={refNode}
            style={{
              ...defaultStyle,
              ...transitionStyle[state],
            }}
            className="modal"
          >
            <div className="close">
              <button onClick={modalTranstionCallback} className="btn">
                <img src={iconClose} alt="" />
              </button>

              <nav className="mobail-nav">
                <ul>
                  <li>
                    <a href="#">Signup</a>
                  </li>
                  <li>
                    <a href="#">How it works</a>
                  </li>
                  <li>
                    <a className="btn" href="#">
                      Login
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </Transition>
    </Container>
  );
};

export default Menu;
