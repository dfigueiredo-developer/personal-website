import HeaderSection from "../headerSection/HeaderSection";
import ContactForm from "./ContactForm";

const Contact = (props) => {
     return ( 
          <section id = 'contact'>
               <div className = 'content'>
                    <HeaderSection title = 'Contact' description = 'Lorem ipsum' />
                    <ContactForm />
               </div>
          </section>
     );
}

export default Contact;