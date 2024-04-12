import React from 'react';
/*import bgImage from './bgimg.jpg';*/
import bgImage from '../images/bgimg2.jpg';

const AboutUs = () => {
  return (
    <div style={styles.page}>
      <center><h1 style={styles.heading}>About Us</h1></center>
      <div style={styles.content}>
        <h5 style={styles.paragraph}>
        
        Department of Automation and Robotics Engineering is recently established by the Institute from A.Y. 2021-22 with a UG program.
        <br></br>
        Automation and Robotics Engineering is an emerging multi-disciplinary course that requires profound application based knowledge in hardware as well as software development, which comprise design, construction, operation, and application of robots. The design of a robotic system puts together basics of mechanical engineering, manufacturing engineering, electrical/electronics Engineering, and Computer engineering.
        </h5>
        <br />

        <h6 style={styles.strong}><strong>Robotics Competition :</strong></h6>
        <h6 style={styles.paragraph}>
          <br />
          Cheer on participants in a thrilling robotics competition that will put their creations to the test. From navigating obstacle courses to solving complex challenges, watch as teams showcase their robotic prowess. The competition games will include robowar, drone racing, esports, line follower, and many more.
        </h6>
        <br />

        <h6 style={styles.strong}><strong>Exhibition Area :</strong></h6>
        <h6 style={styles.paragraph}>
          <br />
          Explore the exhibition area featuring companies and startups at the forefront of robotics innovation. Connect with exhibitors, discover new products, and explore potential collaborations.
        </h6>
        <br />

        <h6 style={styles.strong}><strong>Networking Opportunities :</strong></h6>
        <h6 style={styles.paragraph}>
          <br />
          Connect with like-minded individuals, professionals, and enthusiasts who share a passion for robotics. Build valuable connections, exchange ideas, and explore potential collaborations during networking sessions.
        </h6>
        <br />

        <h6 style={styles.strong}><strong>Registration :</strong></h6>
        <h6 style={styles.paragraph}>
          <br />
          Secure your spot at Excalibur 2024 by registering online at the Registration portal. The portal is available, so don't miss out on this incredible opportunity to be part of the future of robotics.
        </h6>
        <br /><br />
        
        <h4 style={styles.paragraph}>Don't miss your chance to be part of this exciting event that promises to inspire, educate, and redefine the possibilities of robotics. See you at Excalibur 2024</h4>
      </div>
    </div>
  );
}

const styles = {
  page: {
    width: '100%',
    padding: '20px',
    backgroundColor: '#edebeb',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heading: {
    color: '#fff'
  },
  paragraph: {
    color: '#fff',
    lineHeight: '1.5',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'justify'
  },
  strong: {
    color: '#fff',
    lineHeight: '1.5',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center'
  }
};

export default AboutUs;
