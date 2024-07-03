import { useEffect, useState } from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import HomeStyle from './HomeStyle';
import SkillsTech from '../../components/skills&Tech/SkillsTech';
import Projects from '../../components/project/Projects';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set a timeout to mimic the loading time
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // Adjust the time as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <HomeStyle>
        <div className={`cards homepage text-white ${isLoaded ? 'fade-in' : ''}`}>
          <img
            src={process.env.PUBLIC_URL + '/images/aditya2.jpg'}
            alt="Your Alt Text"
            className="card-img imgStyle"
          />
          <div className="card-img-overlay">
            <h5 className="card-title name">ADITYA PAWAR</h5>
            <p>MERN Developer</p>
            <p className="location">
              <PlaceIcon className="locationIcon" /> Pune, India
            </p>
          </div>
        </div>
      </HomeStyle>
      <SkillsTech />
      <Projects />
    </>
  );
};

export default Home;
