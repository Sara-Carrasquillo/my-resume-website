import React from 'react';

const PROJECTS = [
    {
        name: 'MyGoalTrackingApp',
        repoUrl: 'https://github.com/Sara-Carrasquillo/MyGoalTrackingApp',
        previewUrl: 'https://opengraph.githubassets.com/1/Sara-Carrasquillo/MyGoalTrackingApp'
    },
    {
        name: 'MacWatch',
        repoUrl: 'https://github.com/Sara-Carrasquillo/MacWatch',
        previewUrl: 'https://opengraph.githubassets.com/1/Sara-Carrasquillo/MacWatch'
    },
    {
        name: 'MyQRCodeGenerator',
        repoUrl: 'https://github.com/your-user/MyQRCodeGenerator',
        previewUrl: 'https://opengraph.githubassets.com/1/Sara-Carrasquillo/My-QR-Code-Generator'
    },
    {
        name: 'HelloPyCharm',
        repoUrl: 'https://github.com/your-user/HelloPyCharm',
        previewUrl: 'https://opengraph.githubassets.com/1/Sara-Carrasquillo/HelloPyCharm'
    }
];
function Projects() {
    return (
        <section className="projects-section">
            <h2 className="section-title">Past Projects</h2>

            <div className="projects-grid">
                {PROJECTS.map(({ name, repoUrl, previewUrl }) => (
                    <div key={name} className="education-card project-card">
                        <img
                            src={previewUrl}
                            alt={`${name} preview`}
                            className="repo-preview"
                            loading="lazy"
                        />
                        <div className="card-header">
                            <h4 className="card-title">{name}</h4>
                        </div>
                        <a
                            href={repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-link"
                        >
                            View on GitHub →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;