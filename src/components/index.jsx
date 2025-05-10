import React from 'react';
import PdfDownload from './PdfDownload.jsx';
import personalPicture from '../assets/personalPic.jpg';
import resumePicture from '../assets/resume.png';

function Index() {

  return (
    <>
        <img src={personalPicture} className="perPic" alt="Sara's Personal Picture" />
        <h1>
            Sara Carrasquillo
        </h1>
            <h3>
                Software Development, Data Structures, and Computer Analysis.
            </h3>

            <h2>My Resume</h2>
        <p>
            <img src={resumePicture} className="resPic" alt="Sara's Resume Picture" />
            <div className="download-pdf">
                <PdfDownload />
            </div>
        </p>
    </>
  )
}

export default Index
