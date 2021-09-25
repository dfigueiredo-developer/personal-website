const Divider = (props) => {

   var dividerClass = 'divider-up';
   console.log(props);
   if(props.isDown)
      dividerClass = 'divider-down';

   return ( 
      <div className = {dividerClass} />
   );
}
 
export default Divider;