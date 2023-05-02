import { Transition } from "react-transition-group";

import { useState, useRef } from "react";

const Question = (props) => {
    let o = props.hasOwnProperty('open') ? props.open : false
    const [open, setOpen] = useState(o);

    const handleClick = () => setOpen(!open);
    const nodeRef = useRef(null);
   // const contentRef = useRef(null);
    const defStyle = {
      transition: `all ${200}ms ease-in-out`,
      opacity: 0,
      height:0,
      display:"none"
    };
    const transStyle = {
      entering: { opacity: 1, height:"100%" ,display:"block " },
      entered: { opacity: 1 , height:"100%",display:"block "},
      exiting: { opacity: 0 , height:0 , display:"none"},
      exited: { opacity: 0  ,height:0 , display:"none"},
    };
    return(
        <div className="question">
                <div className="header">
                  <span>What is Finify?</span>
                  <button onClick={handleClick}>
                    <svg
                      width="18"
                      height="11"
                      viewBox="0 0 18 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 0.183293L17.5 8.68329L15.5167 10.6666L9 4.14996L2.48333 10.6666L0.5 8.68329L9 0.183293Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                </div>

                <Transition ref={nodeRef} duration={200} in={open}>
                  {(state) => (
                    <p
                      style={{
                        ...defStyle,
                        ...transStyle[state],
                      }}
                      ref={nodeRef}
                      className="content"
                    >
                      Finify is an AI Chat tool, powered by OpenAI and that can
                      retrieve and discuss current stock market data, prices,
                      and the latest financial news.{" "}
                    </p>
                  )}
                </Transition>
              </div>
    )
}

export default Question;    