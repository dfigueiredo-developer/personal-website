import iconTerminal from '../../images/icons/terminal.svg';

const HeaderSection = (props) => {
     return ( 
         <div className = 'header-section-wrapper'>
              <div className = 'header-section-title'>
                   <img src = {iconTerminal} alt = 'terminal icon' className = 'header-section-icon' />
                   <h1>{props.title}</h1>
              </div>
              
              <div className = 'header-section-divider' />
              <p>{props.description}</p>
         </div>
      );
}
 
export default HeaderSection;