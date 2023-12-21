import React, { useState } from 'react'

// img is src
// header is string
// subHeader is string
// date is string
// skills is array of strings
// bulletPoints is array of strings
const ProjectItem = ({image, header, subHeader, date, skills, bulletPoints, link}) => {
    const [hover, setHover] = useState(false)
    return (
    <div 
        // onMouseEnter={() => setHover(header)} 
        // onMouseLeave={() => setHover("")} 
        style={hover === header ? styles.hoverContainer : styles.container}
        // onClick={() => window.open(link)}
    >
        <h1 style={styles.header}>{header}</h1>
        <h2 style={styles.subHeader}>{subHeader}</h2>
        <p style={styles.date}>{date}</p>
        <div style={styles.skillsRow}>
        {skills.map((skill) => {
            return (
                <p style={styles.skill}>{skill}</p>
                )
            })}
        </div>
            <img src={image} alt="header" style={{width: 150, height: 150, marginTop: 16, marginBottom: 16}}/>
        <div style={styles.bulletPointsContainer}>
        {bulletPoints.map((bulletPoint) => {
            return (
                <li style={styles.bulletPoint}>{bulletPoint}</li>
            )
        })}
        <button onClick={() => window.open(link)} style={{marginTop: 16, backgroundColor: '#000', color: 'white', border: 'none', borderRadius: 5, padding: 8, width: 150, cursor: 'pointer', alignSelf: 'center'}}>
            Check it out!
        </button>
        </div>
    </div>
  )
}

export default ProjectItem

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 24,
        width: 350,
        padding: 24,
        borderRadius: 5,
    },
    hoverContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 24,
        width: 350,
        // add a shadow
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
        padding: 24,
        borderRadius: 5,
        cursor: 'pointer',
    },
    header: {
        fontSize: 24,
        marginTop: 12,
        fontWeight: '600',
        color: '#0060ff',
        textAlign: 'center'
    },
    subHeader: {
        fontSize: 16,
        color: '#666666',
        fontWeight: '400',
        textAlign: 'center'
    },
    date: {
        fontSize: 16,
    },
    skill: {
        fontSize: 12,
        border: '1px solid #666666',
        borderRadius: 5,
        padding: 4,
        marginRight: 8,
        textAlign: 'center',
        marginTop: 6,

    },
    skillsRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    bulletPoint: {
        fontSize: 14,
        fontWeight: '200',
        marginTop: 4,
        marginLeft: 12,
    },
    bulletPointsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    }
}