import React, { useState, useEffect, useCallback } from 'react';
import { Button, Modal } from 'react-bootstrap';
import closeIcon from '../images/window1.jpg';
import Image from '../images/bgimg1.jpg';
import './Main.css';
import Logo from '../images/logo.png';
import close from '../images/close.png';
import sponsor1 from '../images/Sponsers/Prolific.png'; // Import sponsor images
import sponsor2 from '../images/Sponsers/i robotics.png';
import sponsor3 from '../images/Sponsers/Janus Auto.png';
import sponsor4 from '../images/Sponsers/Rushas.jpg';
import sponsor5 from '../images/Sponsers/Falcon.jpeg';
import sponsor6 from '../images/Sponsers/pramod wagh sir.png';
import sponsor7 from '../images/Sponsers/Sansun pvt,ltd.png';
import sponsor8 from '../images/Sponsers/Nandini Engineer.jpeg';
import sponsor9 from '../images/Sponsers/Global Soft.jpeg';
import sponsor10 from '../images/Sponsers/Yuvavarta Logo.png';



const Main = () => {
  const targetDate = new Date('2024-04-18T23:59:59').getTime();

  const calculateTimeRemaining = useCallback(() => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }, [targetDate]);

  const [remainingTime, setRemainingTime] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateTimeRemaining]);

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    window.location.href = '/Events';
  };

  const handleregisterModal = () => {
    window.location.href = '/Register';
  };

  return (
    <>
      {/* Existing content */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '700px',
          overflow: 'hidden',
          backgroundImage: `url(${Image})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >

        <img src={Logo} alt="Excalibur Logo" style={{ position: 'absolute', marginTop: "25px", top: '20px', left: '50%', transform: 'translateX(-50%)', width: '150px', height: '150px' }} />

        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
          }}
        >
          <h1 style={{ fontSize: '3rem', marginTop: "117px", marginBottom: '20px', fontFamily: 'Times New Roman' }}> {/*Welcome to*/} <br />EXCALIBUR</h1>
          <br></br>
          <h3 style={{ fontSize: '2rem', marginTop: "-90px", marginBottom: '5px', fontFamily: 'Times New Roman' }}> {/*Welcome to*/} <br />2K24</h3>
          <p style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Participate in events and Explore the prizes</p>
          <Button
            className="start-button"
            variant="outline-info"
            onClick={() => setShowModal(true)}
            style={{ marginBottom: '25px' }}>
            <h4>Explore</h4>
          </Button><br></br>

          <Button
            className="register-button"
            variant="outline-info"
            onClick={() => handleregisterModal(true)}
            style={{ marginBottom: '35px' }}>
            <h4>Register Now</h4>
          </Button><br></br>
          <br></br>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CountdownBlock label="Days" value={remainingTime.days} />
            <CountdownBlock label="Hours" value={remainingTime.hours} />
            <CountdownBlock label="Minutes" value={remainingTime.minutes} />
            <CountdownBlock label="Seconds" value={remainingTime.seconds} />
          </div>
        </div>

        <Modal show={showModal} onHide={() => setShowModal(false)} backdrop="static" keyboard={false}>
          <Modal.Body style={{ backgroundColor: 'transparent', textAlign: 'center' }}>
            <div style={{ position: 'relative' }}>
              {/* Close icon */}
              <img src={close} alt="Close" style={{ width: '40px', height: '40px', position: 'absolute', top: '10px', right: '-10px', cursor: 'pointer', zIndex: 1 }} onClick={handleCloseModal} />
              {/* Image */}
              <img src={closeIcon} alt="Close the window" style={{ width: '100%', height: 'auto', marginTop: '60px' }} />
            </div>
          </Modal.Body>
        </Modal>
      </div>

      {/* Sponsored By section */}
      <div style={{ backgroundColor: '#000000', color:'#FFFFFF', padding: '20px', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '10px' }}>Sponsored By</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {/* Replace with your sponsor images */}
          <img src={sponsor1} alt="Sponsor 1" style={{ width: '80px', height: '30px', margin: '0 10px' }} />
          <img src={sponsor2} alt="Sponsor 2" style={{ width: '80px', height: '30px', margin: '0 10px' }} />
          <img src={sponsor3} alt="Sponsor 1" style={{ width: '80px', height: '30px', margin: '0 10px' }} />
          <img src={sponsor4} alt="Sponsor 1" style={{ width: '80px', height: '30px', margin: '0 10px' }} />
        </div>
        <br></br>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {/* Replace with your sponsor images */}
          <img src={sponsor5} alt="Sponsor 1" style={{ width: '80px', height: '50px', margin: '0 10px' }} />
          <img src={sponsor6} alt="Sponsor 2" style={{ width: '80px', height: '50px', margin: '0 10px' }} />
          <img src={sponsor7} alt="Sponsor 1" style={{ width: '80px', height: '50px', margin: '0 10px' }} />
          <img src={sponsor8} alt="Sponsor 1" style={{ width: '80px', height: '50px', margin: '0 10px' }} />
        </div>
        <br></br>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {/* Replace with your sponsor images */}
          <img src={sponsor9} alt="Sponsor 1" style={{ width: '60px', height: '50px', margin: '0 10px' }} />
          <img src={sponsor10} alt="Sponsor 2" style={{ width: '80px', height: '50px', margin: '0 10px' }} />
          
        </div>
      </div>
    </>
  );
};

const CountdownBlock = ({ label, value }) => (
  <div style={{ margin: "5px", padding: '5px', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '8px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)', flex: '1 0 80px' }}>
    <p style={{ fontSize: '1rem', color: "white", marginBottom: '5px' }}>{label}</p>
    <p style={{ fontSize: '1.5rem', color: "white", fontWeight: 'bold' }}>{value}</p>
  </div>
);

export default Main;
