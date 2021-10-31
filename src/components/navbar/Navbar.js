import items from './NavbarItems';

window.onscroll = () => {
     var navbar = document.getElementById('navbar-wrapper');
     if(window.scrollY > 70)
          navbar.style.opacity = 1;
     else
          navbar.style.opacity = 0;
          
}

const closeMenu = () => {
     let toogleInput = document.getElementById('toogle');
     if(toogleInput.checked)
          toogleInput.click();
}

const Navbar = () => {
     return (
          <header id = 'navbar-wrapper'>
               <div className = 'navbar-content'>
                    <input type = 'checkbox' id = 'toogle' />
                    <span className = 'navbar-logo'>Diogo Figueiredo</span>
                    <nav className = 'navbar-items'>
                         {
                              items.map((item) => {
                                   return (<a key = {item.id} href = {item.anchor} onClick = {() => closeMenu()}>{item.label}</a>) 
                              })
                         }
                    </nav>   
                    <label htmlFor = 'toogle' className = 'fa fa-bars' /> 
               </div>
          </header>
      );
}
 
export default Navbar;