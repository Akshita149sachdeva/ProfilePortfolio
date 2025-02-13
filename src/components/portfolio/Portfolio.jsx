import { useState } from "react";
import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "Programming Languages",
    img: "public/code.png",
    desc: "Java, Python , C, C++ , data structures and algorithms",
  },
  {
    id: 2,
    title: "Machine Learning",
    img: "public/ml.png",
    desc: "I am proficient in machine learning, with a strong understanding of algorithms and model development.",
  },
  {
    id: 3,
    title: "MERN Stack",
    img: "public/mern.png",
    desc: "React, NodeJS, ReactJS,Express, Database Management",
  },
  {
    id: 4,
    title: "Core Subjects",
    img: "public/cn.png",
    desc: "Computer Networks, SQL, Operating Systems, Object Oriented Programming",
  },
];

const Single = ({ item }) => {
  return (
    <div className="item">
      <div className="imageContainer">
        <img src={item.img} alt="" />
      </div>
      <div className="textContainer">
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
       
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="portfolio">
      <div className="progress">
        <h1>Skills and Tech Stack</h1>
        <div className="progressBar"></div>
      </div>
      <div className="slider">
        <Single item={items[currentIndex]} />
      </div>
      <div className="navigation">
        <button className="arrowButton" onClick={handlePrev}>
          &larr; {/* Left arrow */}
        </button>
        <button className="arrowButton" onClick={handleNext}>
          &rarr; {/* Right arrow */}
        </button>
      </div>
    </div>
  );
};

export default Portfolio;