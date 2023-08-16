import React from "react";
import "./Features.css";
import { Feature } from "../../components";
const featuresData = [
  {
    title: "Improving and distrust internacional folks",
    text: "From they fine john he give something more expensive",
  },
  {
    title: "Why everything got to be so complicated",
    text: "From they fine john he give something more expensive",
  },
  {
    title: "His palms are sweaty moms spaguetti",
    text: "From they fine john he give something more expensive",
  },
  {
    title: "What if god was one of us, just a slove like one of us",
    text: "From they fine john he give something more expensive",
  },
];
const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          consectetur et, quibusdam dolorum ab iste culpa eum pariatur labore!
          Commodi quaerat perspiciatis aperiam quidem ab. Iusto temporibus
          officia dolor optio?
        </h1>
        <p>Lorem ipsum, dolor sit asdas asdasd asdasd</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Features;
