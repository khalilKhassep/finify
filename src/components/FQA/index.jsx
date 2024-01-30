import { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import avatar from "../assets/svg/avatar.svg";
import Question from "./Question";
import "./style.scss";
const FQA = (props) => {
  const [activeIndex , setActiveIndex] = useState(0)
  const questions = [
    {
      title: "What is Finify?",
      content:
        "Finify is an AI Chat tool, powered by OpenAI and that can retrieve and discuss current stock market data, prices, and the latest financial news.",
      id: 2,
    },
    {
      title: "What is Finify?",
      content:
        "Finify is an AI Chat tool, powered by OpenAI and that can retrieve and discuss current stock market data, prices, and the latest financial news.",
      id: 3,
    },
    {
      title: "What is Finify?",
      content:
        "Finify is an AI Chat tool, powered by OpenAI and that can retrieve and discuss current stock market data, prices, and the latest financial news.",
      id: 4,
    },
    {
      title: "What is Finify?",
      content:
        "Finify is an AI Chat tool, powered by OpenAI and that can retrieve and discuss current stock market data, prices, and the latest financial news.",
      id: 5,
    },
  ];

  const $s = (i) => {
    if(i === activeIndex) {
      
    }
  }
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
              {questions.map((qs, index) => {
                return (
                  <Question
                    title={qs.title}
                    isAactive={activeIndex === index}
                    onShow={() => setActiveIndex(index)}
                  >
                    {qs.content}
                  </Question>
                );
              })}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FQA;
