import AboutStyle from './AboutStyle';

import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';

const About=()=>{
    return(<>
    <AboutStyle>
        <div className="mainBox">
            <div className="row">
                <div className="col-lg-6 heading">
                    <h1 className="title"><span className="color">FrontEnd</span> & BackEnd Developer</h1>
                    <p className="description">Hi I'm Aditya Pawar. Passionate Frontend & Backend Developer Based in Pune,India</p>
                    <div className="links">
                        <p>
                            <a href='https://github.com/adityaPawar1999' target='_blank' rel='noopener noreferrer'>
                                <span className="gitLink link"><GitHubIcon/></span>
                            </a>
                            <a href='mailto:adityapawar8909@gmail.com' target='_blank' rel='noopener noreferrer'>
                                <span className="mailLink link"><EmailIcon/></span>
                            </a>
                            <a href='https://www.linkedin.com/in/aditya-pawar-857247216/' target='_blank' rel='noopener noreferrer'>
                            <span className="linkedLink link"><LinkedInIcon/></span>
                            </a>
                            <a href="tel:+918888359809 " target='_blank' rel='noopener noreferrer'>
                            <span className="callLink link"><CallIcon/></span>
                            </a>
                        </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img 
                    className="imgStyle"
                    src={process.env.PUBLIC_URL + "/images/aditya.jpg"} 
                    alt="profile_img"
                    />
                </div>
            </div>
        </div>
    </AboutStyle>
    </>)
}
export default About;