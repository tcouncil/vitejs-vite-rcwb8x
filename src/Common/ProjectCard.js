import React from 'react';
import ImagePH from '../images/project-placeholder.png'

export default function ProjectCard({
    title = 'title',
    description = 'description',
    stack = '#', github = '#', live = '#', image = ImagePH }) {
    return (
        <>
            <div className='row'>
                <div className='col-3 mt-4'>
                    <h6>{title}</h6>
                    <a href={github} target='_blank' rel="noreferrer">
                        <img className='mb-1' src={image} alt={title} />
                    </a>
                </div>
                <div className='col-9 mt-5'>
                    <p>{description}</p>
                    <div className='m-4'>
                        <a href={github} target='_blank' rel="noreferrer" className='button px-4' >Repo</a>
                        <a href={live} target='_blank' rel="noreferrer" className='button px-4' >Demo</a>
                    </div>
                    <p>{stack}</p>
                </div>
            </div>
        </>
    )
}