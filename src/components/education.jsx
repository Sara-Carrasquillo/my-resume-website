import React, { useRef } from 'react';

function Education() {
    const educationData = [
        { title: 'University', content: 'Seminole State College of Florida', icon: '🎓' },
        { title: 'Graduation Date', content: 'Spring 2025', icon: '📅' },
        { title: 'Degree', content: 'A.S. Degree in Computer Programming and Analysis', icon: '📜' },
        { title: 'Cumulative GPA', content: '3.5', icon: '🍎' },
        { title: 'Certificates', content: 'Computer Programming Specialist  Computer Programming  Information Technology Analysis  SQL & Data Analysis', icon: '🏆' },
        { title: 'Educational Honors', content: 'Summa Cum Laude & President’s List', icon: '🏅' }
    ];

    const containerRef = useRef(null);

    const scrollByWidth = (offset) => {
        if (containerRef.current) {
            const cardWidth = containerRef.current.firstChild.getBoundingClientRect().width;
            containerRef.current.scrollBy({ left: offset * cardWidth, behavior: 'smooth' });
        }
    };

    return (
        <section className="education-section">
            <h2> Education </h2>
            <div className="slider-controls">
                <button
                    onClick={() => scrollByWidth(-1)}
                    aria-label="Scroll left"
                    className="slider-button"
                >
                    &lt;
                </button>
                <button
                    onClick={() => scrollByWidth(1)}
                    aria-label="Scroll right"
                    className="slider-button"
                >
                    &gt;
                </button>
            </div>

            <div className="carousel-container" ref={containerRef}>
                {educationData.map((item, idx) => (
                    <div key={idx} className="education-card">
                        <div className="card-header">
                            <span className="card-icon">{item.icon}</span>
                            <h4 className="card-title">{item.title}</h4>
                        </div>
                        <p className="card-content">{item.content}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Education;