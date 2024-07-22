/* import {Link} from 'react-router-dom'; */
import event1 from '../images/Robowar.jpg';
import event2 from '../images/Linefollowerrobot.jpg';
import event3 from '../images/Dronracing.jpg';
import event4 from '../images/e.jpg';
import event5 from '../images/robotprogramming.jpg';
import event6 from '../images/Roboexpo.jpg';
import event7 from '../images/contraption.jpg';
import event8 from '../images/digitalposterpresentation.jpg';
import event9 from '../images/paperpresentation.jpg';
import './Events.css';
import bgImage from '../images/bgimg1.jpg';
const Events = () => {
    const events = [
        { id: 1, name: 'Robo War', location: 1, image: event1, 
        description:"Get ready to witness an adrenaline-fueled battle of robots in the ultimate test of strength and strategy! In the Robowar competition, teams will pit their custom-built robots against each other in a thrilling showdown of mechanical mayhem.",
        fileUrl: 'https://drive.google.com/file/d/1nTOBE0pfreFQTNMFtYx2Hwh0DcQWhBXz/view?usp=sharing',
        link:"https://forms.gle/Je7XycezBWAAtdbP8" },
        { id: 2, name: 'Line Follower Robo Racing', location: 2, image: event2, 
        description: "Welcome to the Line Follower Robo Race competition! This exciting event challenges participants to design and build autonomous robots capable of completing a predefined path on a track using sensors and programming algorithms.",
        fileUrl: 'https://drive.google.com/file/d/1Hlk_DqRI6k6Qao4__xVwa_XUqz59khNW/view?usp=sharing',
        link:"https://forms.gle/b4V6fmAFJfE9GGpW9" },
        { id: 3, name: 'Drone Racing', location: 3, image: event3, 
        description: "Welcome to the adrenaline-fueled world of drone racing! Get ready to witness an exhilarating display of speed, agility, and precision as skilled pilots navigate their drones through a challenging course filled with obstacles and twists." ,
        fileUrl: 'https://drive.google.com/file/d/1z8eOquAe4kDnMg6hFmUOUfI2zqsN6BF6/view?usp=sharing',
        link:"https://docs.google.com/forms/d/e/1FAIpQLSclaSgml3HVpmmzCBUZnTBYoOsONX28KZJD0Ms59xeBK-TIMQ/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link"},
        { id: 4, name: 'E-Sport', location: 4, image: event4, 
        description: "eSports feature professional gamers battling across various video game genres like MOBAs and FPS. Tournaments, held in arenas or online, draw millions of viewers, offering substantial prizes and elevating gaming to a global competitive spectacle." ,
        fileUrl: 'https://drive.google.com/file/d/11uWD_zo5I00FQbSuSV6GCXBhZWRfkSJO/view?usp=drive_link',
        link:"https://docs.google.com/forms/d/e/1FAIpQLSd7_7nPrszZzCCRB70ipFJuICAzLg3OviGDFzLtO9K_iUGYQw/viewform?usp=sf_link"},
        { id: 5, name: 'Robot Programming', location: 5, image: event5, 
        description: "In the Robot Programming event, participants showcase their Problem solving and design abilities by developing logics for different Problems using PLC, design of different parts using CAD software. Challenges may involve manipulating objects, or completing tasks autonomously. This event tests participants' programming skills, problem-solving abilities, and creativity in crafting efficient and precise robotic behaviors.",
        fileUrl: 'https://drive.google.com/file/d/1rzbh_2L465PodxZ6R1xpIdEJaTtpFjJV/view?usp=sharing',
        link:"https://forms.gle/NoDfky7bpZArnEnz5"},    
        { id: 6, name: 'Exhibition', location: 6, image: event6, 
        description: "Experience the cutting-edge of robotics at the Robot Innovator Exhibition, where innovation meets imagination. This interactive showcase brings together the latest advancements in robotics technology, featuring a diverse range of robotic creations designed to inspire, educate, and captivate audiences of all ages." ,
        fileUrl: 'https://drive.google.com/file/d/1WnWaSOHNmvJr2MX1PldLBE2h4Sh2S9-h/view?usp=sharing',
        link:"https://forms.gle/ZeR2hdtRXUwjdcJb6"},
        { id: 7, name: 'Lathe War', location: 8, image: event7, 
        description: "It is the competition amongst students on Lathe Machine. Different tasks in terms of machining operation were given to the students like turning, facing, Threading, drilling, grooving. likewise some of the operations participants has to perform on the given job and within a given time limits they has to complete their job with accuracy.",
        fileUrl: 'https://drive.google.com/file/d/110QergLy6NTFR4EjbsRdqmqr5O2e2m0n/view?usp=sharing' ,
        link:"https://docs.google.com/forms/d/1Gx5g-wd2IdJV-fGfXX0Ub_MC3sEgzxuAHVov_HKeDGg/edit"},
        { id: 8, name: 'Digital Poster Presentation', location: 7, image: event8, 
        description: "Digital poster competitions entail crafting visually captivating posters using multimedia elements and digital tools. Participants convey ideas, promote concepts, and engage in friendly competition, showcasing their design skills and creativity in a digital format." ,
        fileUrl: 'https://drive.google.com/file/d/1X1jpHq-rCQgPVt040zseCDunyQWcATJ0/view?usp=sharing' ,
        link:"https://forms.gle/CgVBzDvfMATVXCP8A"},
        { id: 9, name: 'Paper Presentation', location: 7, image: event9, 
        description: "Paper presentation competitions showcase research or scholarly work through oral presentations summarizing papers. Participants present findings, ideas, or analyses, supported by visual aids, aiming for clarity, originality, and effective communication to peers and judges." ,
        fileUrl: 'https://drive.google.com/file/d/1JHKuOCqe7SY09T4gjWKIm-n8K5sXUK1F/view?usp=sharing',
        link:"https://docs.google.com/forms/d/e/1FAIpQLSf64YtqNUa_Mp3Kb8Qo-CpdJpq9NmG8GZpNE3SahycjwCpilw/viewform"}

    ];

    const handleDownload = (fileUrl) => {
        window.open(fileUrl, '_blank');
    };

    // backgroundImage: `url(${Image})`
    return (
        <div style={{ position: 'relative', backgroundImage: `url(${bgImage})`, backgroundAttachment: 'fixed', Width: '100%',
        padding: '20px',
        backgroundColor: '#eeeded',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',}}>
            
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: '1' }}>
                <h1 style={{ textAlign: 'center', color: '#fff', width: '100%' }}>Events</h1>
                {events.map(event => (
                    <div key={event.id} className="event-item">
                        <img src={event.image} alt="" className="event-image" />
                        <h2 className="event-name">{event.name}</h2>
                        {/*<p className="event-info"><b>Date: </b>{event.date}</p>*/}
                        {/* <p className="event-info"><b>Date: </b> {event.location}</p> */}
                        <p className="event-description">{event.description}</p>
                        <button style={{ 
        background: "#87CEEB",
        border: "2px solid black",
        borderRadius: "10px",
        height: "40px", // Increase the height
    }}
    onMouseEnter={(e) => e.target.style.backgroundColor = "#808080"} // Change color on hover
    onMouseLeave={(e) => e.target.style.backgroundColor = "#87CEEB"} onClick={() => handleDownload(event.fileUrl)}>Event Rulebook</button>
    {/*
    <Link to={event.link}><button style={{ 
        background: "#87CEEB",
        border: "2px solid black",
        marginLeft:"10px",
        borderRadius: "10px",
        height: "40px", // Increase the height
    }}
    onMouseEnter={(e) => e.target.style.backgroundColor = "#808080"} // Change color on hover
    onMouseLeave={(e) => e.target.style.backgroundColor = "#87CEEB"} >Register</button></Link>
*/}
                    </div>
                ))}
                
            </div>
        </div>
    );
};

export default Events;
