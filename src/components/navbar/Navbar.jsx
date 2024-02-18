import { NavLink } from 'react-router-dom';
import StyleNAV from './StyleNAV';
import { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';

const Navbar = () => {
    const [MenuBtnOpen, setMenuBtn] = useState(false);

    const handleBTN = () => {
        setMenuBtn(!MenuBtnOpen);
    };

    const closeMenu = () => {
       setMenuBtn(false);
    };

    return (
        <>
            <StyleNAV>
                <div className="navbar container">
                    <div className="logo">
                        <h5><b>AVP</b>.DEV</h5>
                    </div>
                    <div className="navlinks">
                        <NavLink className="links" to="/">HOME</NavLink>
                        <NavLink className="links" to="/about">ABOUT ME</NavLink>
                        {MenuBtnOpen ? (
                            <p className='menuBtn' onClick={handleBTN}><CancelIcon/></p>
                        ) : (
                            <p className='cancelBtn' onClick={handleBTN}><MenuIcon/></p>
                        )}
                    </div>
                </div>
                <div className='mobileSetting'>
                    {MenuBtnOpen && (
                        <div className='mobileNavigation'>
                            <NavLink onClick={closeMenu} className="Mobilelinks" to="/">
                                HOME
                            </NavLink>
                            <NavLink onClick={closeMenu} className="Mobilelinks" to="/about">
                                ABOUT ME
                            </NavLink>
                        </div>
                    )}
                </div>
            </StyleNAV>
        </>
    );
};

export default Navbar;
