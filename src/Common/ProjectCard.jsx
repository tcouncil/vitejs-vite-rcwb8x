import React from 'react';
import ImagePH from '../images/project-placeholder.png'

export default function ProjectCard({
    title = 'title',
    description = 'description',
    stack = '#', github = '#', live = '#', image = ImagePH }) {
    return (
        <>
            <div className='landing-title'>
                    
                <div className='landing-header project-d'>
                    <h3 >{title}</h3>
                    <p className='project-d'>{description}</p>
                    <div>
                        <a href={github} target='_blank' rel="noreferrer" className='button px-4' >Repo</a>
                        <a href={live} target='_blank' rel="noreferrer" className='button px-4' >Demo</a>
                    </div>
                    <br />
                    <em>{stack}</em>
                </div>
                <a className='project-img' href={live} target='_blank' rel="noreferrer">
                        <img src={image} alt={title} />
                </a>
            </div>
        </>
    )
}