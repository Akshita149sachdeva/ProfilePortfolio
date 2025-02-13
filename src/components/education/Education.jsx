import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./education.scss";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Education = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
         
          <h1>
            <motion.b whileHover={{color:"orange"}}>Education is not preparation for life; education is life itself.</motion.b> 
          </h1>
        </div>
        <div className="title">
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "orange", color: "black" }}
        >
          <h2>National Informatics Centre</h2>
          <p>
              <h3 style={{ marginBottom: "10px" }}>AI/ML Intern</h3>
              <h3 style={{ marginBottom: "10px" }}>June 2024-July 2024</h3>
              <p style={{ marginBottom: "10px" }}>Participated in a project focused on utilizing machine learning models to improve crop monitoring and identification.</p>
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "orange", color: "black" }}
        >
          <h2>Vellore Institute of Technology</h2>
          <p>
              <h3 style={{ marginBottom: "10px" }}>2022-2026</h3>
              <h4 style={{ marginBottom: "10px" }}>BTech. Information Technology</h4>
              <p style={{ marginBottom: "10px" }}>CGPA: 9.0</p>
              <p style={{ marginBottom: "10px" }}>Contributed as a management member for ACM, VIT Vellore, while consistently maintaining a CGPA of 9 with strong academic performance.</p>
          </p>
       
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "orange", color: "black" }}
        >
          <h2>Guru Nanak Public School</h2>
          <p>
              <h3 style={{ marginBottom: "10px" }}>2021-2022</h3>
              <h4 style={{ marginBottom: "10px" }}>Class 12 Boards</h4>
              <p style={{ marginBottom: "10px" }}>Percentage:97%</p>
              <p style={{ marginBottom: "10px" }}>Maintained an outstanding 97% in Class 12 Board Examinations</p>
          </p>
       
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "orange", color: "black" }}
        >
            <h2>Bhartiya Vidya Bhavan</h2>
          <p>
              <motion.h3 style={{ marginBottom: "10px" }} >2019-2020</motion.h3>
              <h4 style={{ marginBottom: "10px" }}>Class 10 Boards</h4>
              <p style={{ marginBottom: "10px" }}>Percentage:97% </p>
              <p style={{ marginBottom: "10px" }}>Participated in various declamations and debate competitons while maintaining stellar academic performance</p>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Education;