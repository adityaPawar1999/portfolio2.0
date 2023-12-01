
import FooterStyle from "./FooterStyle"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import { NavLink } from "react-router-dom";

import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Footer = () => {
    return (<>
        <FooterStyle>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="SocialSite">
                            <p className="text-center title">CONNECT ME ON</p>
                            <a href='https://github.com/adityaPawar1999' target='_blank' rel='noopener noreferrer'>
                                <span className="gitLink link"><GitHubIcon/></span>
                            </a>
                            <a href='https://www.linkedin.com/in/aditya-pawar-857247216/' target='_blank' rel='noopener noreferrer'>
                            <span className="linkedLink link"><LinkedInIcon/></span>
                            </a>
                            <a href="https://instagram.com/adityapawa.r/?igshid=NTc4MTIwNjQ2YQ%3D%3D " target='_blank' rel='noopener noreferrer'>
                            <span className="callLink link"><InstagramIcon/></span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 dialBox">
                        <p>
                            <span className="dial"><PlaceIcon /> Pune,India</span><br />
                            <a href="tel:+918888359809 " target='_blank' rel='noopener noreferrer'>
                                <span className="dial"><CallIcon /> +918888359809</span><br />
                            </a>
                            <a href="mailto:adityapawar8909@gmail.com" target='_blank' rel='noopener noreferrer'>
                                <span className="dial"><EmailIcon />  adityaPawar8909@gmail.com</span>
                            </a>
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <div className="row footerLink">
                            <NavLink className="links" to="/">Home</NavLink>
                            <NavLink className="links" to="/about">About</NavLink>
                            <NavLink className="links" to="/home">Project</NavLink>
                            <NavLink className="links" to="/home">Contact</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </FooterStyle>
    </>)
}
export default Footer;
