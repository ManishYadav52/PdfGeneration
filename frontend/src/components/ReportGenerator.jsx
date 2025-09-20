import React, { useState } from 'react';
import API from '../utils/api';

export default function ReportGenerator() {
  const [sessionId, setSessionId] = useState('');
  const [status, setStatus] = useState('');
  const [pdfPath, setPdfPath] = useState('');

  const handleGenerate = async () => {
    if (!sessionId) {
      setStatus('Please enter a session ID.');
      setPdfPath('');
      console.log("No session ID entered.");
      return;
    }

    setStatus('Generating PDF...');
    setPdfPath('');
    console.log("Generating PDF for session:", sessionId);

    try {
      const res = await API.post('/report/generate-report', { session_id: sessionId });
      console.log("API Response:", res.data);

      if (res.data.filePath) {
        setStatus('PDF generated successfully!');
        setPdfPath(`http://localhost:5001/reports/${sessionId}.pdf`);
        console.log("PDF Path to use in browser:", `http://localhost:5001/reports/${sessionId}.pdf`);
      } else {
        setStatus('Failed to generate PDF.');
        console.log("PDF generation failed, no filePath returned.");
      }
    } catch (err) {
      setStatus(err.response?.data?.error || 'Error generating PDF.');
      console.error("Error generating PDF:", err);
    }
  };



  return (
    <div className="bg-white p-6 rounded shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Generate PDF Report</h2>

      {status && (
        <div className="mb-4 p-2 bg-yellow-100 text-yellow-700 rounded">{status}</div>
      )}

      <input
        type="text"
        placeholder="Enter session ID"
        value={sessionId}
        onChange={(e) => setSessionId(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <button
        onClick={handleGenerate}
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
      >
        Generate
      </button>

      {pdfPath && (
        <div className="mt-4">
          <a href={pdfPath} target="_blank" rel="noopener noreferrer" className='text-blue-500'>
            Download PDF
          </a>
        </div>
      )}
    </div>
  );
}
