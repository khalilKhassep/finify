import { Container, Row, Col } from "react-grid-system";
import fox from "../assets/svg/fox.svg";
import us from "../assets/svg/us.svg";
import nbc from "../assets/svg/nbc.svg";
import yahoo from "../assets/svg/yahoo.svg";
import './style.scss'
export default function FeaturedIn(props) {
  return (
    <Container>
        <h1 className="title">Featured In</h1>
      <Row align="center" justify="center">
        
        <Col xs={6} sm={6} md={4} lg={3} xl={3}>
          <div className="box">
            <img src={yahoo} />
          </div>
        </Col>

        <Col xs={6} sm={6} md={4} lg={3} xl={3}>
          <div className="box">
            <img src={us} />
          </div>
        </Col>
        <Col xs={6} sm={6} md={4} lg={3} xl={3}>
          <div className="box">
            <img src={fox} />
          </div>
        </Col>
        <Col xs={6} sm={6} md={4} lg={3} xl={3}>
          <div className="box">
            <img src={nbc} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
