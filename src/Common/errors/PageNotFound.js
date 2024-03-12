import React from 'react';
import Button from '../Button';

export default function PageNotFound() {
    return (
        <>
            <div className='landing'>
                <h3 style={{ color: 'white' }}>404 Page Not Found</h3>
                <Button to='/' text='Go Home' />
            </div>
        </>
    )
}