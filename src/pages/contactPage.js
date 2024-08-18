import React, { useState } from 'react';

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message Sent!");
        // Logic to send message can be added here
    };

    return (
        <div className="h-screen bg-gray-900 text-white flex items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg animate__animated animate__fadeInUp">
                <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-4 mb-4 rounded-lg bg-gray-700"
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-4 mb-4 rounded-lg bg-gray-700"
                    required
                />
                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-4 mb-6 rounded-lg bg-gray-700"
                    required
                />
                <button type="submit" className="w-full bg-teal-500 py-3 rounded-lg hover:bg-teal-600 transition duration-300">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactPage;
