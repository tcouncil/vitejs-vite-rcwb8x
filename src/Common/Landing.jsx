import React from 'react';
import Contact from './Contact';
import Slideshow from './Slideshow';
import Placeholder from '../images/project-placeholder.png';
import I_ProjectTeForm from '../images/project-tf.png'
import ImageOfTC from '../images/tcouncil.png';
import Footer from './Footer';

export default function Landing() {
    const images = [
        {
            image: I_ProjectTeForm,
            title: 'TeForm',
            description: 'During my time in college, while taking Japanese 1, I recognized the need for an effective study tool to reinforce our understanding of verb conjugation. To address this, I took the initiative to develop a simple yet powerful quizzing tool specifically tailored to aid myself and my classmates in mastering this essential aspect of the language.',
            stack: 'React, JavaScript',
            repo: 'https://github.com/tcouncil/teform',
            live: 'https://tcouncil.github.io/teform/'
        },
        {
            image: 'https://raw.githubusercontent.com/tcouncil/Portfolio/main/src/images/project-pt.png',
            title: 'pasteType',
            description: 'As a passionate learner and developer, I understand the importance of accuracy and speed when it comes to typing code or any text. To challenge myself and improve my typing skills, I created a small web application to practice.',
            stack: 'React, JavaScript, CSS',
            repo: 'https://github.com/tcouncil/PasteType',
            live: 'https://tcouncil.github.io/PasteType/'
        },
        {
            image: 'https://raw.githubusercontent.com/tcouncil/Portfolio/main/src/images/project-zg.png',
            title: 'Zelda Like Game Demo',
            description: 'This is a project I started with the vision of combining the first 2 Zelda games.',
            stack: 'Unity, C#',
            repo: '',
            live: 'https://play.unity.com/mg/other/webgl-builds-387126'
        }
    ];

    return (
        <>
            <div className='landing'>
                <div className='landing-card'>
                    <hr id="landing-hr" />
                    <div className='landing-title project-card'>
                        <img className='portrait' src={ImageOfTC} alt='Portrait of Travis Council' />
                        <div className='landing-header'>

                            <h1 className='landing-header'>Travis Council</h1>
                            <p><b>Forward-driven individual with a background in Programming and formal eduction in Database Administration, ready to bring expertise and innovation to your team. Comfortable with a variety of technologies, passionate, and a quick learner. Eager to apply skills and commitment to excellence in a rewarding professional role.</b></p>
                        </div>
                    </div>
                    
                    <hr id="landing-hr" />
                    {/* Showcase */}
                    <div className='row mx-0'>
                        <h2 className='mb-0'>Showcase</h2>
                        <hr id="landing-hr" />
                        <Slideshow images={images} />
                    </div>
                    <hr id="landing-hr" />
                    <div className='row mx-0'>
                        <h4 className='mb-0'>Contact</h4>
                        <hr id="landing-hr" />
                        <Contact />
                        <hr id="landing-hr" />
                        <Footer />
                    </div>
                </div>
            </div>
            <hr id="landing-hr" />
            
        </>
    )
}