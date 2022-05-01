import Project from "../components/Project";
import projectData from "../data/projectData";

const projects = () => {
  const projects = projectData.map((project) => (
    <Project key={project.id} project={project} />
  ));
  return (
    <div className="h-full pt-24 bg-slate-100">
      <div className="h-full w-ninety max-w-7xl mx-auto my-4 space-y-6">
        {projects}
      </div>
    </div>
  );
};

export default projects;
