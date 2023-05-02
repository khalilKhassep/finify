import { Container, Row, Col } from "react-grid-system";
import ad from '../assets/svg/ad.svg'
import './style.scss'
const Image = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="img-box">
            <img src={ad} alt="@" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Image