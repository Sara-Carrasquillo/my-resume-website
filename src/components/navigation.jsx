import React from 'react';

import linkLogo from '/linkedinlogo.png'
import gitLogo from '/githublogo.png'
import gmailLogo from '/gmailLogo.png'
function Navigation() {

    return (
        <>
            <ul className="navigation">
                <li><a href="#index">Home</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>

            <ul className="socialLinks">
                <li>
                    <a
                        href="https://www.linkedin.com/in/sara-carrasquillo-b39263276"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={linkLogo}
                            className="linkLogo"
                            alt="LinkedIn logo"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/Sara-Carrasquillo"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={gitLogo}
                            className="githubLogo"
                            alt="GitHub logo"
                        />
                    </a>
                </li>
                <li>
                    <a href="mailto:Saracarrasquillo007@gmail.com">
                        <img
                            src={gmailLogo}
                            className="gmailLogo"
                            alt="Gmail logo"
                        />
                    </a>
                </li>
            </ul>
        </>
    );
}

export default Navigation
