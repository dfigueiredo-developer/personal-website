const KnowledgeCard = (props) => {
     return ( 
         <div className = 'knowledge-card'>
              <div className = 'knowledge-card-img-wrapper'>
                   <img src = {props.knowledgeItem.image} alt = {props.knowledgeItem.alt} />
              </div>
              <div className = 'knowledge-card-lang-wrapper'>
                   {props.knowledgeItem.language}
              </div>
         </div>
      );
}
 
export default KnowledgeCard;