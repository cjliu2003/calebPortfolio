import React from 'react'
import Headshot from '../../assets/VectorHeadshot.png'
const About = () => {

    const bulletPoints = [
        'am an active member of the philanthropy team at Sigma Phi Epsilon Fraternity. This year so far, we have raised $2,500 for the Ronald McDonald House through restaurant partnerships, casino night event, and a cookie bake sale 👪',
        'play bass guitar and keyboard in a rock/pop band that performs frequently for events on and off campus 🎸',
        'compose music soundtracks for student film projects organized by Golden Spike Film Studios, the student-run film company 🎬',
        'co-lead and arrange music for the Stanford Video Game Music Ensemble of 10 players 🎮',
        'struggle to make it past the semi-finals in playoffs on my IM flag football and basketball teams 🏈🏀',
        'serve as a Asian-American Big Sib (mentor) for 10 freshman, facilitating their transition to college 👨‍👧‍👦',
        'code websites and apps with other students for hackathons and personal projects 👨‍💻',
    ]
  return (
    <div style={styles.container}>
        <h1>About Me 😃</h1>
        <img src={Headshot} alt="headshot" style={{width: 300, height: 300, marginTop: 16, marginBottom: 16}}/>
        <p style={styles.imageCaption}>My attempt at a self portrait (Adobe Illustrator)</p>
        <div style={styles.textContainer}>
        <p style={styles.pStyle} >Personally, I’m interested in a gazillion different things, but the ones that stick out are – music, film, film music, journaling, basketball, golf, art, and creative writing. I’ll splurge on tuna sashimi, experiences (especially traveling), music equipment, and cool graphic tees. </p>
        <p style={styles.pStyle} >Currently, I study CS (Human-Computer Interaction) and Music at Stanford University 🌲 as a part of the class of 2025.</p>
        <p style={styles.pBoldStyle}> On campus, I…</p>
        {bulletPoints.map((bulletPoint) => {
            return (
                <li style={styles.liStyle}>{bulletPoint}</li>
            )
        })}
        <p style={styles.pStyle} >I’m still trying to figure out what I want to do with my life, but I know I enjoy learning new things, pushing myself out of my comfort zone, and being creative! </p>
        </div>
    </div>
  )
}

export default About

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 75
    },
    textContainer: {
        width: 350,
    },
    pStyle: {
        fontSize: 16,
        marginTop: 12,
    },
    liStyle: {
        fontSize: 16,
        marginTop: 12,
        marginLeft: 12,
    },
    pBoldStyle: {
        fontSize: 16,
        marginTop: 12,
        fontWeight: 'bold',
    },
    imageCaption: {
        fontSize: 14,
        color: '#666666',
        textAlign: 'center',
    }
}