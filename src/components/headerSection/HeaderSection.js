const HeaderSection = (props) => {
     return ( 
         <div className = 'header-section-wrapper'>
              <h1>{props.title}</h1>
              <p>{props.description}</p>
         </div>
      );
}
 
export default HeaderSection;