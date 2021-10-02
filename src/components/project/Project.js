import HeaderSection from "../headerSection/HeaderSection";
import ProjectCard from "../projectCard/ProjectCard";
import items from './ProjectItems';

const Projects = (props) => {
     return ( 
         <section id = 'project'>
               <div className = 'content'>
                    <HeaderSection title = 'Projects' description = 'Lorem ipsum' />
                    <div className = 'project-wrapper'>
                         {
                              items.map((item) => {
                                   return (
                                        <div>
                                             <ProjectCard projectItem = {item} />
                                        </div>
                                   ) 
                              })
                         }
                    </div>
              </div>
         </section>
      );
}
 
export default Projects;