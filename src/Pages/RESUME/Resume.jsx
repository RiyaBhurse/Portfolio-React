import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import resumePDF from './resume.pdf';

function Resume() {
  return (
    <div className="resume-container">
      <Viewer fileUrl={resumePDF} />
    </div>
  );
}

export default Resume;
