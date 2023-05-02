import { Container, Row, Col } from "react-grid-system";
import "./style.scss";
const Footer = () => {
  return (
    <footer className="footer-bg">
      <Container>
        <Row>
          <Col>
          <div className="footer">
           <ul>
              <li>
                <a href="#">Terms and conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">contact Us</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Log in</a>
              </li>
              <li>
                <a href="#">Sign Up</a>
              </li>
            </ul>
          </div>
          
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
