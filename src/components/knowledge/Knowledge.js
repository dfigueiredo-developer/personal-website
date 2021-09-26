import HeaderSection from "../headerSection/HeaderSection";
import KnowledgeCard from "../knowledgeCard/KnowledgeCard";
import items from './KnowledgeItems';

const Knowledge = (props) => {
     return ( 
         <section id = 'knowledge' className = 'knowledge-wrapper'>
              <HeaderSection title = 'Knowledge' description = 'Lorem ipsum' />
              {
                    items.map((item) => {
                         return (<KnowledgeCard knowledgeItem = {item} />) 
                    })
               }
         </section>
      );
}
 
export default Knowledge;