import React from 'react'

const Home = () => {
  const pStyle = {
    fontSize: '20px',
    marginTop: 12,
  }
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div style={{width: 350, marginTop: 75}}>
        <h1>Hi, I'm Caleb!</h1>
        <p style={pStyle}>
        I’m a creative with extensive work and project experience in SWE, UI/UX design, marketing/communications, and leadership - based in Palo Alto, CA where I'm studying computer science (human-computer interaction) 🖥️ and music composition 🎶.
        <b> I'm passionate about creative technologies, music, and data-driven problem solving</b>
        </p>
        <p style={pStyle}>
         On the more artistic side, I write music soundtracks for film and media and have grown my audience size to ~ 7 million people across 113 countries through 15 projects worldwide. 
         </p>
        <p style={pStyle}>
        I love being creative and solving complex problems! Feel free to reach out to me at calebliu@stanford.edu
        </p>
      </div>
    </div>
  )
}

export default Home