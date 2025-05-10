import React, { useEffect, useRef } from 'react';
import './FloatingBalls.css';
// Importing images from the assets folder
import ball1 from '../assets/ball1.png';
import ball2 from '../assets/ball2.png';
import ball3 from '../assets/ball3.png';
import ball4 from '../assets/ball4.png';

const ballImages = [ball1, ball2, ball3, ball4];

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function FloatingBalls() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const numBalls = 12;

        for (let i = 0; i < numBalls; i++) {
            const ball = document.createElement('img');
            const randomBallIndex = Math.floor(Math.random() * ballImages.length);
            ball.src = ballImages[randomBallIndex];
            ball.className = 'floating-ball';

            const size = getRandom(30, 80);
            ball.style.width = `${size}px`;
            ball.style.height = `${size}px`;

            ball.style.top = `${getRandom(0, 100)}%`;
            ball.style.left = `${getRandom(0, 100)}%`;

            const duration = getRandom(10, 20);
            const delay = getRandom(0, 10);

            ball.style.animationDuration = `${duration}s`;
            ball.style.animationDelay = `${delay}s`;

            container.appendChild(ball);
        }
    }, []);

    return <div className="balls-container" ref={containerRef} />;
}

export default FloatingBalls;