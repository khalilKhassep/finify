import { Container, Row, Col } from "react-grid-system";
import avatar from "../assets/svg/avatar.svg";
import Question from "./Question";
import "./style.scss";
const FQA = (props) => {
 
  return (
    <div className="wrapper">
      <div className="fqa-innerwrapper">
        <Container>
            <h1 className="title">Frequently Asked Questions</h1>
          <Row>
            <Col xs={12} sm={12} md={4} lg={5} xl={5}>
              <div className="img-wrapper">
                <img src={avatar} alt="" />
              </div>
            </Col>
            <Col xs={12} sm={12} md={8} lg={7} xl={7}>
               <Question open={true}>  </Question>
               <Question>   </Question>
               <Question>   </Question>
               <Question>   </Question>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FQA;
