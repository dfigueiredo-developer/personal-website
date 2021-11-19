import HeaderSection from "../headerSection/HeaderSection";
import KnowledgeCard from "../knowledgeCard/KnowledgeCard";
import items from './KnowledgeItems';

const Knowledge = (props) => {
     return ( 
         <section id = 'knowledge' className = 'content padding-xxxl-0'>
              <HeaderSection title = 'Knowledge' description = 'Lorem ipsum' />
              <div className = 'knowledge-wrapper'>
                   {
                         items.map((item) => {
                              return (
                                   <div>
                                        <KnowledgeCard knowledgeItem = {item} />
                                   </div>
                              ) 
                         })
                    }
              </div>
              
         </section>
      );
}
 
export default Knowledge;