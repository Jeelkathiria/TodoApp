import React from 'react';
import './WelcomeMessage.css'; // Assuming you have a CSS file for styles


const WelcomeMessage = () => {
  return (
    <p className="text-lg sm:text-xl text-center text-gray-700 italic typewriter">
      ✔️ No tasks left. Take a breath, you've earned it!
    </p>
  );
};

export default WelcomeMessage;
