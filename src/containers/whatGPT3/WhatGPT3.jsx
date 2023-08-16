import React from "react";
import "./WhatGPT3.css";
import { Feature } from "../../components";
const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="lorem asdasdasd aslorem asdasdasd asdasdasd asdasda adasdasd asdlorem asdasdasd asdasdasd asdasda adasdasd asdlorem asdasdasd asdasdasd asdasda adasdasd asddasdasd asdasda adasdasd asd"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="ChatBots"
          text="lorem asdasdasd lorem asdasdasd asdasdasd asdasda adasdasd asdlorem asdasdasd asdasdasd asdasda adasdasd asd asdasdasd asdasda adasdasd asd"
        />
        <Feature
          title="Knowledgebase"
          text="lorem asdasdasd asdasdasd asdasda adasdasdlorem asdasdasd asdasdasd asdasda adasdasd asd lorem asdasdasd asdasdasd asdasda adasdasd asdlorem asdasdasd asdasdasd asdasda adasdasd asd asd"
        />
        <Feature
          title="Education"
          text="lorem asdasdasd alorem asdasdasd asdasdasd asdasda adasdasd asdsdasdasd asdasda adasdasd asd"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
