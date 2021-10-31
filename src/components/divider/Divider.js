const Divider = (props) => {

   const styles = {
      fill: props.color,
      backgroundColor: props.color
   }

   var extraClassName = 'up';
   if(props.isDown)
      extraClassName = 'down';

   return (
      <div className = {'divider-wrapper ' + extraClassName} style = {styles}>
         {/*<svg viewBox='0 0 100 100' preserveAspectRatio='none' className = {'divider ' + extraClassName}>
            <path d='m 0,0 h 100 l -100,95z' style = {styles} />
         </svg>*/}
      </div>
   );
}
 
export default Divider;