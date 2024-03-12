import React from 'react';
import Contact from './Contact';
import Slideshow from './Slideshow';
import Placeholder from '../images/project-placeholder.png'

export default function Landing() {
    const images = [
        {
            image: Placeholder,
            title: 'TeForm',
            description: 'During my time in college, while taking Japanese 1, I recognized the need for an effective study tool to reinforce our understanding of verb conjugation. To address this, I took the initiative to develop a simple yet powerful quizzing tool specifically tailored to aid myself and my classmates in mastering this essential aspect of the language.',
            stack: 'React',
            repo: 'https://github.com/tcouncil/teform',
            live: 'https://tcouncil.github.io/teform/'
        },
        {
            image: 'https://raw.githubusercontent.com/tcouncil/Portfolio/main/src/images/project-pt.png',
            title: 'pasteType',
            description: 'As a passionate learner and developer, I understand the importance of accuracy and speed when it comes to typing code or any text. To challenge myself and improve my typing skills, I created a small web application to practice.',
            stack: 'React',
            repo: 'https://github.com/tcouncil/PasteType',
            live: 'https://tcouncil.github.io/PasteType/'
        },
        {
            image: 'https://raw.githubusercontent.com/tcouncil/Portfolio/main/src/images/project-zg.png',
            title: 'Zelda Like Game Demo',
            description: 'This is a project I started with the vision of combining the first 2 Zelda games.',
            stack: 'Unity',
            repo: '',
            live: 'https://play.unity.com/mg/other/webgl-builds-387126'
        }
    ];

    return (
        <>
            <div className='landing'>
                <div className='landing-card'>
                    <img className='portrait' src={'https://raw.githubusercontent.com/tcouncil/Portfolio/main/src/images/tcouncil.png'} alt='Portrait of Travis Council' />
                    <h1>Travis Council</h1>
                    <hr id="landing-hr mt-1" />
                    <p className='mx-3 mt-3'><b>Recent Graduate with a Strong Foundation in Database Administration and Programming based in Denver, CO.</b></p>
                    <hr id="landing-hr" />
                    {/* Skills and Education */}
                    <div>
                        <p className='m-5'><i>
                            "I recently graduated with an Associates of Applied Science in Database Administration from Front Range Community College in Spring 2023.
                            Additionally, I hold a programming certificate obtained from a prestigious programming bootcamp in May of 2021.
                            With this solid educational background and passion for technology, I bring a fresh perspective and an array of skills to the table. Together, let's shape the future with passion and determination."</i>
                        </p>
                    </div>
                    {/* Showcase */}
                    <div className='row mx-0'>
                        <h5 className='mb-0'>Showcase</h5>
                        <hr id="landing-hr" />
                        <Slideshow images={images} />
                    </div>
                    <hr id="landing-hr" />
                    <div className='row mx-0'>
                        <h5 className='mb-0'>Contact</h5>
                        <hr id="landing-hr" />
                        <Contact />
                    </div>
                </div>
            </div>
        </>
    )
}