import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ExploreIcon from '@mui/icons-material/Explore';
import ScienceIcon from '@mui/icons-material/Science';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import logo from '../assets/logo.jpg';
import '../css pages/Home.css'; // Assuming you have a CSS file

const Home = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    // Add any necessary cleanup or state updates before logging out
    navigate('/login');
  };

  const handleGetStarted = () => {
    navigate('/explore');
  };

  const handleLearnMore = () => {
    navigate('/learn');
  };

  return (
    <div className="home-container">
      <header className="App-header" style={{ backgroundImage: 'url(/path/to/your-background-image.jpg)' }}>
        <div className="hero-overlay">
          <div className="logo-container">
            <img src={logo} alt="Unlock Echo Logo" className="logo" />
            <h1 className="site-title">Welcome to Virtual Lab</h1>
          </div>
          
          <div className="logout-container">
            <Button 
              variant="contained" 
              color="error" 
              startIcon={<LogoutIcon />} 
              className="Log-out" 
              onClick={handleLogOut}
              aria-label="Log out"
            >
              Log Out
            </Button>
          </div>
        </div>
      </header>

      <section className="how-it-works">
        <div className="steps-container">
          {['Choose Your Experiment', 'Perform the Experiment', 'Collaborate and Learn'].map((step, index) => (
            <div key={index} className="step hover-effect">
              {index === 0 && <SchoolIcon style={{ fontSize: 50, color: '#2196f3' }} />}
              {index === 1 && <ScienceIcon style={{ fontSize: 50, color: '#4caf50' }} />}
              {index === 2 && <PeopleIcon style={{ fontSize: 50, color: '#ff9800' }} />}
              <h3>{`Step ${index + 1}: ${step}`}</h3>
              <p>{`Description for ${step}.`}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Virtual Lab?</h2>
        <div className="benefits-container">
          <div className="benefit">
            <ScienceIcon style={{ fontSize: 40 }} />
            <p><strong>Advanced Simulations:</strong> Our virtual lab offers cutting-edge simulations that mimic real-life lab environments.</p>
          </div>
          <div className="benefit">
            <PeopleIcon style={{ fontSize: 40 }} />
            <p><strong>Global Collaboration:</strong> Connect and collaborate with students, educators, and scientists from around the world.</p>
          </div>
          <div className="benefit">
            <SchoolIcon style={{ fontSize: 40 }} />
            <p><strong>Expert Guidance:</strong> Get tips and guidance from experienced educators and industry professionals.</p>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Features of Our Virtual Lab</h2>
        <ul>
          <li><ScienceIcon /> <strong>Realistic Simulations:</strong> Experiment in a lifelike virtual environment.</li>
          <li><PeopleIcon /> <strong>Collaborate Globally:</strong> Work with students and experts worldwide.</li>
          <li><ScienceIcon /> <strong>Track Progress:</strong> Get insights and results from your experiments.</li>
        </ul>
        <Button 
          variant="outlined" 
          color="secondary" 
          startIcon={<ExploreIcon />} 
          onClick={handleLearnMore}
        >
          Learn More
        </Button>
      </section>

      <footer className="App-footer">
        <p>&copy; 2024 Virtual Lab. All Rights Reserved.</p>
        <div className="social-media-links">
          {['Facebook', 'Twitter', 'Instagram'].map((platform) => (
            <a 
              key={platform} 
              href={`https://www.${platform.toLowerCase()}.com`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {platform}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default Home;
