import HeaderSection from "../headerSection/HeaderSection";
import ProjectCard from "../projectCard/ProjectCard";
import items from './ProjectItems';

const Projects = (props) => {
     return ( 
         <section id = 'projects' className = 'bg-neutral-200'>
               <div className = 'projects-wrapper'>     
                    <div className = 'content padding-xxxl-0'>
                         <HeaderSection title = 'Projects' description = 'Lorem ipsum' />
                         <div className = 'subcontent projects-items'>
                              {
                                   items.map((item) => {
                                        return ( <ProjectCard projectItem = {item} />) 
                                   })
                              }
                         </div>
                    </div>
              </div>
         </section>
      );
}
 
export default Projects;