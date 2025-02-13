import "./projects.scss";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      desc: "Made using ReactJS and Framer Motion.",
      img: "public/port.png",
      github: "https://github.com/Akshita149sachdeva/ProfilePortfolio",
    },
    {
      id: 2,
      title: "Crop Detection and Identification",
      desc: "Expertly configured and trained a YOLOv8-based model to achieve precise detection and classification of diverse crop types.",
      img: "public/crop.png",
      github: "https://github.com/Akshita149sachdeva/crop_detect",
    },
    {
      id: 3,
      title: "Disease Prediction",
      desc: "Employed Python and Machine Learning to implement predictive models for forecasting diabetes, heart attacks, and Parkinson’s disease.",
      img: "public/dis.png",
      github: "https://github.com/Akshita149sachdeva/Disease_prediction",
    },
    {
      id: 3,
      title: "NextGen Recruit",
      desc: "An AI-powered interview system for interactive and engaging student recruitment.",
      img: "public/recruit.png",
      github: "https://github.com/Akshita149sachdeva/NextGenRecruit",
    },
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.img} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.desc}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;