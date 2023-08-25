import React, { useState } from 'react';

const CEOLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [attempts, setAttempts] = useState(3);
    const [message, setMessage] = useState('');
    const loadingImage = "/images/removebg-preview.png";

    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === 'Gabriel' && password === 'Gabriel') {
            // Successful login logic here
            setMessage('Successfully logged in!');
        } else {
            setAttempts(attempts - 1);

            if (attempts > 1) {
                setMessage(`You have ${attempts - 1} more tries till a virus is downloaded on your computer.`);
            } else {
                setMessage('Virus has been successfully installed. Computer powering down.');
                // Optionally, you can redirect the user or lock the login form here
            }
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CEOLogin;
