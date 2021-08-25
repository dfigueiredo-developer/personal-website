import items from './Items';

const Navbar = () => {
     return (
          
          <div>
               <span className = 'bold'>Diogo Figueiredo</span>
               {
                    items.map((item) => {
                         return (<a key = {item.id} href = {item.anchor} className = 'bold text-decoration-none'>{item.label}</a>) 
                    })
               }
          </div>
      );
}
 
export default Navbar;