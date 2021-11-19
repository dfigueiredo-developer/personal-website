import HeaderSection from "../headerSection/HeaderSection";
import ContactForm from "./ContactForm";

const Contact = (props) => {
     return ( 
          <section id = 'contact'>
               <div className = 'content padding-xxxl-0'>
                    <HeaderSection title = 'Contact' description = 'Lorem ipsum' />
                    <div className = 'subcontent'>
                         <ContactForm />
                    </div>
               </div>
          </section>
     );
}

export default Contact;