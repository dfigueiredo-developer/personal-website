const KnowledgeCard = (props) => {

     const styles = {
          backgroundColor: props.knowledgeItem.color
     }

     return ( 
         <div className = 'knowledge-card-wrapper'>
              <div>
                   <img src = {props.knowledgeItem.image} alt = {props.knowledgeItem.alt} className = 'knowledge-img' />
              </div>
              <div className = 'knowledge-lang' style = {styles}>
                   {props.knowledgeItem.language}
              </div>
         </div>
      );
}
 
export default KnowledgeCard;