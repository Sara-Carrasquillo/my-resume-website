import React, { useCallback } from 'react';
import { saveAs } from 'file-saver';
import PdfLink from '/MyResume.pdf';

function PdfDownload() {
    const handleDownload = useCallback(() => {
        fetch(PdfLink)
            .then((res) => {
                if (!res.ok) throw new Error('Network error');
                return res.blob();
            })
            .then((blob) => {
                saveAs(blob, 'resume.pdf');
            })
            .catch((err) => console.error('Download failed', err));
    }, []);

    return (
        <div className="download-wrapper">
            <button onClick={handleDownload} className="download-btn">
                Download PDF…
            </button>
            <p>
                <a
                    href={PdfLink}
                    download="resume.pdf"
                    className="download-link"
                >
                    Or click here if that doesn’t work
                </a>
            </p>
        </div>
    );
}

export default PdfDownload; 