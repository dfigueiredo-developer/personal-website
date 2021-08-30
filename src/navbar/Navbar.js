import items from './Items';

window.onscroll = () => {
     var navbar = document.getElementById('navbar-wrapper');
     if(window.scrollY > 100)
          navbar.classList.add('bg-white');
     else
          navbar.classList.remove('bg-white');
}

const closeMenu = () => {
     let toogleInput = document.getElementById('toogle');
     if(toogleInput.checked)
          toogleInput.click();
}

const Navbar = () => {
     return (
          <header id = 'navbar-wrapper'>
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
          </header>
      );
}
 
export default Navbar;