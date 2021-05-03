import React from 'react';

function ContactMe() {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-background">
            <h1 className="font-header text-xl md:text-3xl mb-6">Contact Me</h1>
            <form className="w-1/2">
                <input type="text" className="w-full mb-3 bg-background p-1 border rounded" placeholder="Enter your full name" />
                <input type="email" className="w-full mb-3 bg-background p-1 border rounded" placeholder="Enter your email" />
                <textarea rows={4} className="w-full mb-3 bg-background p-1 border rounded" placeholder="Enter your message" />
            </form>
        </div>
    )
}

export default ContactMe;