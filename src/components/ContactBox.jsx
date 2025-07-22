import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !message) {
            alert("All fields are required.");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        const serviceId = 'service_4gjpijm';
        const templateId = 'template_5l3lf4q';
        const publicKey = 'mUZwJlSSxa3m4UesN';

        const templateParams = {
            from_name: name,
            email: email,
            message: message,
        };


        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                alert('Message sent!');
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                alert('Failed to send message.');
                console.error('Error sending email:', error);
            });
    };

    return (
        <div className='flex justify-center items-center relative mt-10 md:mt-0'>
            <div className='bg-white shadow-xl shadow-sky-700/10 border-1 border-sky-700/30 p-8 rounded-3xl w-[85vw] md:w-[30vw] mt-24'>
                <h2 className='bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent font-bold text-3xl text-center mb-6'>Contact Us</h2>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 text-black'>
                    <input
                        type='text'
                        placeholder='Your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='bg-gray-600/10 backdrop-blur-md placeholder-black/50 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/40'
                    />
                    <input
                        type='email'
                        placeholder='Your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-gray-600/10 backdrop-blur-md placeholder-black/50 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/40'
                    />
                    <textarea
                        placeholder='Your Message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows='5'
                        className='bg-gray-600/10 backdrop-blur-md placeholder-black/50 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/40'
                    ></textarea>
                    <button
                        type='submit'
                        className='bg-white text-sky-700 font-bold py-2 rounded-xl border-sky-600 border-1 shadow-xl hover:cursor-pointer hover:scale-[1.02] transition-transform duration-300 hover:shadow-md'
                    >
                        Send Email
                    </button>
                </form>
            </div>
        </div>
    );
}
