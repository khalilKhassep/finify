import { Container, Row, Col } from "react-grid-system";
import "./style.scss";
import c from '../assets/svg/crcs.svg';
import l from '../assets/svg/lines.svg';
import play from '../assets/svg/play.svg'
const Video = (props) => {
  return (
    <div className="outerwrapper">
      <Container>
        <h1 className="title">How to use Finify</h1>
        <Row>
          <Col>
            <div className="boxv">
                <div className="line">
                    <img src={l} alt="" />
                </div>
                <div className="csc">
                    <img src={c} alt="" />
                </div>

                <div className="v">
                      <div className="play">
                        <img src={play} alt="" />
                      </div>
                    
                
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Video;
