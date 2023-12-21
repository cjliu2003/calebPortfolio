import React from 'react'
import Claros from '../../assets/Claros.png'
import Digest from '../../assets/Digest.png'
import Noted from '../../assets/Noted.png'
import Plato from '../../assets/Plato.png'
import TradeSmart from '../../assets/TradeSmart.png'
import ProjectItem from '../../components/ProjectItem'

const projects = [
    {
        "image": Claros,
        "header": 'Claros',
        "subHeader": 'Full-Stack AI-powered Sports Analytics Web and Mobile App',
        "date": 'July 2022 - February 2023',
        "skills": ['Project Management', 'Process Optimization', 'React', 'UI/UX Design', "Leadership", 'Cross-Departmental Communication'],
        "bulletPoints": [
            "Self-learned web development and built a full-stack mobile app and web application that supported 300+ paying DAU",
            "Executed comprehensive design thinking process, conducting 15 user interviews, building multiple complex task flows and wireframes, ultimately fully programming a search engine interface that effectively managed over 2 million data points 📊",
            "Engineered a read-optimized database structure to efficiently handle over 2 million data points 🔧",
            "Scripted, filmed, performed, and edited promotional videos; Grew TikTok channel to over 10k followers in one month 🎥"
        ],
        "link": 'https://apps.apple.com/us/app/claros-ai/id1667192004'
    },
    {
        "image": Digest,
        "header": 'Digest',
        "subHeader": `Full-Stack AI-Powered Study Web App`,
        "date": 'February 2023',
        "skills": [
            "React",
            "NLP",
            "OCR",
            "UI/UX Design",
            "Data Parsing",
        ],
        "bulletPoints": [
            "Developed in 48 hours for Stanford Treehacks, Digest is a React application, leveraging AI technologies NLP and OCR to process videos, images, and PDFs, converting them into flashcards, quizzes, and summaries 💡",
            "Designed and programmed a fully functional digital flashcard and quiz-taking interface ✍️"
        ],
        "link": 'https://devpost.com/software/ingest'
    },
    {
        "image": Noted,
        "header": 'Noted',
        "subHeader": 'Full-Stack Creative Multimedia Journaling App',
        "date": 'September 2023 - December 2023',
        "skills": ['React Native', 'Design Thinking', 'Firebase', 'Social Computing', 'UI/UX Design'],
        "bulletPoints": [
            "Developed an introspective multimedia journaling app in React Native",
            "Incorporated 15 user interviews to refine UI/UX through 3 prototype iterations ✔️",
            "Built a multimedia content-creation pipeline allowing users to pair photos with music and add reflective journal entries 🎵",
            "Implemented a personalized feed for user-centric reflection and a social feed for sharing with friends 🤝"
        ],
        "link": 'https://web.stanford.edu/class/cs147/projects/PreservingthePast/Noted/'
    },
    {
        "image": Plato,
        "header": 'Plato',
        "subHeader": 'Full-Stack Food-Based Social Mobile App 🍴',
        "date": 'March 2023 - June 2023',
        "skills": ['React', 'Node.js', 'Firebase', 'GitHub', 'Social Computing', 'UI/UX Design'],
        "bulletPoints": [
            "Developed a social platform in React Native that allows Stanford students to share dining-hall offerings in real time",
            "Leveraged Firebase database and storage and expo camera to support real-time data synchronization and media capture 📲",
            "Implemented authentication, user profiles, and real-time data updates in a personalized feed 🔄"
        ],
        "link": 'https://github.com/cjliu2003/Plato'
    },
    {
        "image": TradeSmart,
        "header": 'TradeSmart',
        "subHeader": "Advanced Pairs Trading Analytics Platform",
        "date": 'January 2023 - March 2023',
        "skills": [
            "Python",
            "Reinforcement Learning",
            "Data Analysis",
            "Financial Modeling",
        ],
        "bulletPoints": [
            "Leveraged deep reinforcement learning to execute pairs trading, achieving a $73.32 net profit over 75 days using S&P 500 data 💰.",
            "Implemented a Deep Q-Network with Stable Baselines 3, analyzing 8 continuous state spaces for precise stock trade decisions 🔍.",
            "Designed a reward function to penalize negative predictions, enhancing model's profit stability during market uncertainties.",
            "Mitigated overfitting and divergence risks, crucial for maintaining model performance in fluctuating financial markets ⚖️."
        ],
        "link": 'https://drive.google.com/file/d/17ZoQNfHuJQ0UrE2IYy-aGDS8BjN_Ae_S/view'
    }
    

]

const Projects = () => {
    
  return (
    <div style={styles.container}>
        <div style={{width: 350, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 24}}>
        <h1 style={styles.header}> Projects</h1>
        <p style={styles.subHeader}>Here are some of my favorite projects I've worked on!</p>
        {projects.map((project, index) => {
            return (
                <ProjectItem
                    image={project.image}
                    header={project.header}
                    subHeader={project.subHeader}
                    date={project.date}
                    skills={project.skills}
                    bulletPoints={project.bulletPoints}
                    link={project.link}
                />
            )
        })}
        </div>
    </div>
  )
}

export default Projects

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center'
    },
    subHeader: {
        fontSize: 16,
        fontWeight: '600',
        color: '#222',
        textAlign: 'center'
    },
}