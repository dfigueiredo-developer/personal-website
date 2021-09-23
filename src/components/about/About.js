import resume from '../../assets/dummy.pdf';

const About = () => {
     return ( 
         <section id = 'about' className = 'about-wrapper'>
            <div className = 'about-wrapper-left-content'>
                 <h1>Diogo Figueiredo</h1>
                 <p>
                    “Portuguese student in the field of web and
                    mobile development. Currently working for 
                    Deloitte Portugal company, using mainly OutSystems.”
                </p>
                <a href = {resume} className = 'download-btn' download = 'Diogo Figueiredo - Resume.pdf'>Download CV</a>
            </div>
         </section>
      );
}
 
export default About;