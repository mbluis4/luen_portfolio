import Project from "../components/Project";
import projectData from "../data/projectData";

const Projects = () => {
  const projects = projectData.map((project) => (
    <Project key={project.id} project={project} />
  ));
  return (
    <div className="h-screen pt-20 bg-cyan-100">
      <div className="h-full w-ninety max-w-7xl mx-auto mt-2">{projects}</div>
    </div>
  );
};

export default Projects;
