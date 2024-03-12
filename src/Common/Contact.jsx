import React from 'react';

export default function Contact() {
    return (
        <>
            <div className="contactForm">
                <form action="https://formspree.io/f/meqvwykq" method="POST">
                
                    <div className="contactFormBorder">
                        <p>Fill out this form with your message!</p>
                        <label for="user-name">Name</label><br />
                        <input required id="user-name" type="text" name="name" /><br />
                        <label for="user-email">Email</label><br />
                        <input required id="user-email" type="text" name="email" /><br />
                        <label for="user-message">Message</label><br />
                        <textarea required id="user-message" name="message"></textarea><br />
                        <button className='button' type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}