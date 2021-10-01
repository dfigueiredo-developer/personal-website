const Divider = (props) => {

   var extraClassName = 'up';
   if(props.isDown)
      extraClassName = 'down';

   return ( 
      <svg viewBox='0 0 100 100' preserveAspectRatio='none' className = {'divider ' + extraClassName}>
         <path d='m 0,0 h 100 l -100,95z' />
      </svg>
   );
}
 
export default Divider;