import items from './NavbarItems';

window.onscroll = () => {
     var navbar = document.getElementsByClassName('navbar-wrapper')[0];
     window.scrollY > 70 ? navbar.classList.remove('hidden') : navbar.classList.add('hidden');
}

const closeMenu = () => {
     let toogleInput = document.getElementById('toogle');
     if(toogleInput.checked)
          toogleInput.click();
}

const Navbar = () => {
     return (
          <header className = 'navbar-wrapper'>
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