import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LOGO_TRAUMAPP from '../public/images/logotraumapp.png';
import classes from '../styles/components/Header.module.css';

const Header = () => {
  const [activateAnimation, setActivateAnimation] = useState(false);

  const activeMenu = () => {
    setTimeout(() => {
      setActivateAnimation(!activateAnimation);
    }, 100);
  };

  return (
    <header>
      <div id="headerHome" className={classes.headerBox}>
        <div className={classes.logoBox}>
          <Image
            src={LOGO_TRAUMAPP}
            height="30px"
            width="30px"
            classes={classes.logoTraumappHeader}
            title="TraumApp"
            alt="TraumApp"
            id="logoTraumApp1"
          />
          <h1 className={classes.logoName}>TraumApp</h1>
        </div>
        <nav className={`${classes.navBox} ${classes.showDesktop}`}>
          <Link href="/">
            <span className={classes.buttonNav}>About Us</span>
          </Link>
          <span className={classes.buttonNav}>Services</span>
          <span className={classes.buttonNav}>Contact</span>
          <div className={`${classes.btnLoginBox} ${classes.showDesktop}`}>
            <button className={classes.btnLogin} type="button">
              Login
            </button>
          </div>
        </nav>
        <div className={classes.showMobile}>
          <div
            className={classes.burguer}
            onClick={() => {
              activeMenu();
            }}>
            <span className={classes.line}></span>
            <span className={classes.line}></span>
            <span className={classes.line}></span>
          </div>
        </div>
      </div>
      <div
        className={`${classes.showMobile} ${classes.listFloat} ${
          activateAnimation ? classes.listActive : ''
        }`}>
        <nav className={classes.navBox}>
          <Link href="/">
            <span
              className={`${classes.buttonNav} ${classes.buttonNavMobile} ${classes.firstItemMobile}`}>
              About Us
            </span>
          </Link>

          <span className={classes.separationItem}></span>
          <span className={`${classes.buttonNav} ${classes.buttonNavMobile}`}>
            Services
          </span>
          <span className={classes.separationItem}></span>
          <span className={`${classes.buttonNav} ${classes.buttonNavMobile}`}>
            Contact
          </span>
          <span className={classes.separationItem}></span>
          <div className={`${classes.buttonNav} ${classes.buttonNavMobile}`}>
            Login
          </div>
          <span className={classes.separationItem}></span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
