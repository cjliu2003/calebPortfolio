import React from 'react'

const Footer = () => {
  return (
    <div style={styles.container}>
        <p style={styles.text}>This site was designed and programmed by me in React - feel free to reach out at calebliu@stanford.edu</p>
    </div>
  )
}

export default Footer

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderTop: '2px solid #eaeaea',
        marginTop: 50,
        height: Math.min(100, window.innerHeight * 0.1),
        justifyContent: 'center',
    },
    text: {
        fontSize: 14,
        color: '#666666',
        textAlign: 'center',
    }
}