import React, { useState } from 'react';
import bgImage from './bgimg.jpg';

function Contact() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    // Open different Google Form links based on the selected option
    switch (option) {
      case 'Option 1':
        window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSd7_7nPrszZzCCRB70ipFJuICAzLg3OviGDFzLtO9K_iUGYQw/viewform?usp=sf_link';
        break;
      case 'Option 2':
        window.location.href = 'https://forms.gle/b4V6fmAFJfE9GGpW9';
        break;
        case 'Option 3':
        window.location.href = 'https://forms.gle/Je7XycezBWAAtdbP8';
        break;
      case 'Option 4':
        window.location.href = 'https://forms.gle/Bso9dYZNUM8paMMk6';
        break;
        case 'Option 5':
        window.location.href = 'https://forms.gle/ZeR2hdtRXUwjdcJb6';
        break;
      case 'Option 6':
        window.location.href = 'https://forms.gle/t1hRBZA8kwnLtxc3A';
        break;
        case 'Option 7':
        window.location.href = 'https://forms.gle/CgVBzDvfMATVXCP8A';
        break;
      case 'Option 8':
        window.location.href = 'https://forms.gle/7x1j9L2NVEbyaSUy8';
        break;
        case 'Option 9':
        window.location.href = 'https://docs.google.com/forms/d/1Gx5g-wd2IdJV-fGfXX0Ub_MC3sEgzxuAHVov_HKeDGg/edit';
        break;
      // Add cases for other options as needed
      default:
        break;
    }
  };

  return (
    <div className='ab' style={{
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "10px",
      paddingTop: "100px",
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed' // Make background fixed
    }}>
      <div style={{
        width: '90%',
        maxWidth: '500px',
        maxHeight: '300px',
        background: "#d2d2d2",
        padding: '30px 20px',
        borderRadius: '35px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#007bff' }}>Register your Self</h1>
        <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#000000' }}>Confirm your Seat</h3>
        <h5 style={{ textAlign: 'center', marginBottom: '20px', color: '#000000' }}>Select your Event :</h5>  
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <select
            value={selectedOption}
            onChange={(e) => handleOptionSelect(e.target.value)}
            style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          >
            <option value="">Select an Event</option>
            <option value="Option 1">E-sport</option>
            <option value="Option 2">Line follower Robo</option>
            <option value="Option 3">Robo War</option>
            <option value="Option 4">Drone Racing</option>
            <option value="Option 5">Exhibition</option>
            <option value="Option 6">Robo Programming</option>
            <option value="Option 7">Digital Poster Presentation</option>
            <option value="Option 8">Paper Presentation</option>
            <option value="Option 9">Lathe War</option>
            {/* Add other options as needed */}
          </select>
        </div>
        {/* You can add a table here if you want */}
      </div>
    </div>
  );
}

export default Contact;
