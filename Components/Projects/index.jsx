
// import React from 'react';
// import { ThemeContext } from "../../Context/ThemeContext";
// import './index.css';

// const ProjectsComponents = ({ Projects }) => {
 
//   return (
//     <div className="projects-container ">
//       <h2 className="projects-title">Projects</h2>
//       <div className="projects-grid">
//         {Projects?.map((project) => (
//           <div key={project.id} className="project-card">
//             <h3>{project.title}</h3>
//             <p >{project.programs}</p> <br />
//             <p>{project.description}</p><br />
            
//             <p>{project.year}</p>
            

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectsComponents;
import React, { useContext } from 'react';
import { ThemeContext } from "../../Context/ThemeContext";
import './index.css';

const ProjectsComponents = ({ Projects }) => {
  const { theme } = useContext(ThemeContext); // Consume ThemeContext

  return (
    <div className={`projects-container ${theme}`}>
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {Projects?.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.programs}</p> <br />
            <p>{project.description}</p><br />
            <p>{project.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsComponents;
