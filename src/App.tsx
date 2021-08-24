import React, { useRef, useState } from 'react';
import './css/App.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Navbar } from './domain/navbar/Navbar';
import { BottomNav } from './domain/bottomnav/BottomNav';
import { ContactButton } from './components/ContactButton';
import { Start } from './domain/start/Start';
import { About } from './domain/about/About';
import { Skills } from './domain/skills/Skills';
import { LegalNotice } from './domain/legalNotice/LegalNotice';
import { Contact } from './domain/contact/Contact';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    siteContainer: {
      maxWidth: '1620px',
      marginLeft: 'auto',
      marginRight: 'auto',
      left: 0
    },
    scrollContainer: {
      height: '100%',
      width: '100%',
      display: 'block',
      position: 'absolute',
      overflow: 'scroll',
      overflowX: 'visible'
    },
    site: {
      minHeight: '100vh',
    }
  })
);

const App: React.FC = (props) => {
  const classes = useStyles();

  const scrollContainerRef = useRef<any>(null);

  const startRef = useRef<any>(null);
  const aboutRef = useRef<any>(null);
  const skillsRef = useRef<any>(null);
  const portfolioRef = useRef<any>(null);
  const contactRef = useRef<any>(null);

  const navigation = (target: "start" | "about" | "skills" | "portfolio" | "contact") => {

    let headerOffset = 64;
    switch (target) {
      case "start": {
        scrollContainerRef.current.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        break;
      }
      case "about": {
        let elementPosition = aboutRef.current.offsetTop;
        let offsetPosition = elementPosition - headerOffset;
        scrollContainerRef.current.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        break;
      }
      case "skills": {
        let elementPosition = skillsRef.current.offsetTop;
        let offsetPosition = elementPosition - headerOffset;
        scrollContainerRef.current.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        break;
      }
      case "portfolio": {
        let elementPosition = portfolioRef.current.offsetTop;
        let offsetPosition = elementPosition - headerOffset;
        scrollContainerRef.current.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        break;
      }
      case "contact": {
        let elementPosition = contactRef.current.offsetTop;
        let offsetPosition = elementPosition - headerOffset;
        scrollContainerRef.current.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        break;
      }
    }
  }

  const [navbarBackground, setNavbarBackground] = useState<boolean>(false);

  const handleScroll = (e: { target: any; }) => {
    let element = e.target
    if (element.scrollTop > 10) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  }


  return (
      <Router>
        <div className={classes.scrollContainer} onScroll={handleScroll} ref={scrollContainerRef}>
          <div className={classes.siteContainer}>
            <Navbar navigation={navigation} siteContainer={classes.siteContainer} background={navbarBackground} />
          </div>
          <div className={classes.siteContainer}>
            <Switch>
              <Route exact path="/">
                <div id="scroll-content">
                  <div ref={startRef} className={classes.site}>
                    <Start />
                  </div>
                  <div ref={aboutRef} className={classes.site}>
                    <About />
                  </div>
                  <div ref={skillsRef} className={classes.site}>
                    <Skills />
                  </div>
                  <div ref={contactRef} className={classes.site}>
                    <Contact />
                  </div>
                </div>
              </Route>
              <Route path="/legal">
                <LegalNotice />
              </Route>
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </div>
        </div>
        <div className={classes.siteContainer}>
          <BottomNav>
            <ContactButton navigation={navigation} />
          </BottomNav>
        </div>
      </Router>
  );
}

export default App;