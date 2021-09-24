import resume from '../../assets/dummy.pdf';
import iconDownload from '../../images/icons/download-cloud.svg';

const About = () => {
     return ( 
         <section id = 'about' className = 'about-wrapper'>
            <div className = 'about-wrapper-left-content'>
                 <h1>Diogo Figueiredo</h1>
                 <p>
                    “Portuguese student in the fields of web and
                    mobile development. Currently working for 
                    Deloitte Portugal company, using mainly OutSystems.”
                </p>
                <a href = {resume} className = 'download-btn' download = 'Diogo Figueiredo - Resume.pdf'>
                  <img src = {iconDownload} alt = 'download icon' />
                  Resume
               </a>
            </div>
         </section>
      );
}
 
export default About;