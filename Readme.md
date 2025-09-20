# Full Stack Developer Assignment: Assessment Management System

## 1. Project Overview
This is a Full Stack Developer assignment to create an **Assessment Management System** with user authentication and dynamic PDF report generation.  

**Important:**  
- The system does **not** handle assessment form creation or storing new assessment data.  
- It only reads pre-existing assessment data from `data.js` and generates PDF reports dynamically.  
- Designed to handle multiple assessment types via configuration without any code changes.

**Key Features:**
- User registration and login with JWT-based authentication.
- Dynamic PDF report generation from JSON-based assessment data.
- Configurable assessment types and field mappings (no code changes required to add new assessments).
- Saves PDFs locally for review.

**System Goal:**  
To provide a flexible, scalable, and easy-to-maintain report generation system for diverse assessment types.


------------------------------------------------------------------------------------------------------------------------------------

## 2. Folder Structure

### Backend
├─ data.js # Sample assessment data
├─ routes/ # API routes
│ └─ authRoutes.js
│ └─ reportRoutes.js
├─ services/ # Business logic for authentication & PDF generation
│ └─ authService.js
│ └─ reportService.js
├─ config/ # Config files for PDF/report templates
├─ utils/ # Helper functions
├─ app.js # Main express app
└─ server.js # Server startup

### Frontend

frontend/
├─ pages/
│ └─ Login.jsx    
│ └─ Dashboard.jsx # Optional testing interface
├─ components/
│ └─ Navbar.jsx
│ └─ ReportCard.jsx
└─ App.jsx

------------------------------------------------------------------------------------------------------------------------------------

## 3. Setup Instructions

### Backend and Frontend
```bash
cd backend
npm install
npm start

cd frontend
npm install
npm start


### 4. Dependencies:

Node.js, Express

React.js, TailwindCSS

Puppeteer (for PDF generation)

bcrypt (for password encryption)

JSON Web Token (JWT) for authentication

Lucide - react icon

| Layer           | Technology / Library      |
|-------------    |-------------------------- |
| Backend         | Node.js, Express          |
| Frontend        | React.js, TailwindCSS     |
| PDF             | Puppeteer                 |
| Authentication  | bcrypt, JWT               |
| Icons           | lucide-react              |


------------------------------------------------------------------------------------------------------------------------------------


## 4. Authentication System
Features

User Registration (Signup): Validates email, password, and stores encrypted password.

User Login: Secure login with JWT-based authentication.

API Endpoints
Endpoint	Method	Description
/register	POST	User signup
/login	POST	User login


------------------------------------------------------------------------------------------------------------------------------------

### 5. PDF Report Generation

API Endpoint
POST /generate-report
Parameters:

session_id: Unique ID to fetch the assessment data

Process:

Reads assessment data from data.js based on session_id.

Determines assessment type via assessment_id.

Maps fields dynamically from JSON to PDF sections using configuration.

Generates PDF using Puppeteer and saves it locally.

Example Field Mapping
PDF Section	JSON Path
Overall Health Score	accuracy
BMI	bodyCompositionData.BMI
Heart Rate	vitalsMap.vitals.heart_rate
Blood Pressure (Systolic)	vitalsMap.vitals.bp_sys
Blood Pressure (Diastolic)	vitalsMap.vitals.bp_dia
Cardiovascular Endurance	exercises[?(@.id==235)].setList[0].time

------------------------------------------------------------------------------------------------------------------------------------

## 6. Configuration System

All assessment types, field mappings, and classification ranges are configurable via JSON.

Adding a new assessment type requires no code changes, only a new configuration file.

Example config structure:

{
  "assessment_id": "as_hr_02",
  "sections": [
    {
      "name": "Key Body Vitals",
      "fields": [
        { "label": "BMI", "path": "bodyCompositionData.BMI" },
        { "label": "Heart Rate", "path": "vitalsMap.vitals.heart_rate" }
      ]
    }
  ]
}

------------------------------------------------------------------------------------------------------------------------------------

## 7. Sample Data
1. Health & Fitness Assessment (as_hr_02)

session_id: session_001

Fields: BMI, BMR, body composition, exercises, tips, vitals, weight, gender.

Example PDF: View PDF

2. Cardiac Assessment (as_card_01)

session_id: session_002

Fields: BMI, body composition, cardiovascular scores, vitals, weight, gender.

Example PDF: View PDF

------------------------------------------------------------------------------------------------------------------------------------

## 8. Demonstration / Video Instructions

1. User registration and login.
2. API call to `/generate-report` with a `session_id`.
3. Generated PDF being saved in `backend/reports/`.
4. Opening and viewing the PDF to check correctness.


------------------------------------------------------------------------------------------------------------------------------------

## 9. Testing

Use sample session_ids from data.js.

Verify PDF correctness for multiple assessment types.

Ensure configuration changes reflect dynamically without modifying code.


------------------------------------------------------------------------------------------------------------------------------------

## 10. Success Criteria

- Working authentication system with signup/login.
- PDF endpoint generates correct reports for sample session_ids.
- All PDFs are stored locally in the filesystem.
- Dynamic configuration works for multiple assessment types.
- Configuration changes do not require any code modification.


