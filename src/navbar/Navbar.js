import './Navbar.css';
import items from './Items';

window.onscroll = () => {
     var navbar = document.getElementById('navbar-wrapper');
     if(window.scrollY > 100)
          navbar.classList.add('bg-white');
     else
          navbar.classList.remove('bg-white');
}

const Navbar = () => {
     return (
          
          <div id = 'navbar-wrapper'>
               <span className = 'navbar-logo'>Diogo Figueiredo</span>

               <span className = 'navbar-items'>
                    {
                         items.map((item) => {
                              return (<a key = {item.id} href = {item.anchor} className = 'bold text-decoration-none'>{item.label}</a>) 
                         })
                    }
               </span>
          </div>
      );
}
 
export default Navbar;