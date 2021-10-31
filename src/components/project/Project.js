import HeaderSection from "../headerSection/HeaderSection";
import ProjectCard from "../projectCard/ProjectCard";
import items from './ProjectItems';

const Projects = (props) => {
     return ( 
         <section id = 'projects'>
               <div className = 'content'>
                    <HeaderSection title = 'Projects' description = 'Lorem ipsum' />
                    <div className = 'projects-wrapper'>
                         {
                              items.map((item) => {
                                   return ( <ProjectCard projectItem = {item} />) 
                              })
                         }
                    </div>
              </div>
         </section>
      );
}
 
export default Projects;