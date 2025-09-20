// Sample assessment data
const assessmentData = [
    {
      "session_id": "session_001",
      "accuracy": 80,
      "assessmentResultId": "-OK76ANqAq9pvKSl3ZoN",
      "assessment_id": "as_hr_02",
      "bodyCompositionData": {
        "AGR": "1.687",
        "Age": "43",
        "BFC": "29.754",
        "BMI": "33.145",
        "BMR": "2054.217",
        "FM": "33.027",
        "FMI": "9.862",
        "HeightM": "184.091",
        "LM": "77.973",
        "LMI": "23.283",
        "M_Age": "48",
        "WHGR": "0.564",
        "WHR": "0.926"
      },
      "exercises": [
        {
          "assignReps": 45,
          "correctReps": 42,
          "id": 259,
          "name": "Squat",
          "setList": [
            {
              "additionalFields": [
                {
                  "fieldName": "accuracy",
                  "fieldText": "Score",
                  "fieldUnit": "%",
                  "fieldValue": "93.333336",
                  "shouldDisplay": false
                },
                {
                  "fieldName": "reps",
                  "fieldText": "Reps",
                  "fieldUnit": "reps",
                  "fieldValue": "42",
                  "shouldDisplay": true
                }
              ],
              "correctReps": 42,
              "incorrectReps": 0,
              "isSkipped": false,
              "time": 90,
              "totalReps": 42
            }
          ],
          "side": "left",
          "totalReps": 42,
          "totalSets": 1,
          "variationId": "",
          "variationName": ""
        }
      ],
      "finalPainScore": "pending",
      "gender": "male",
      "height": 183,
      "initialPainScore": 0,
      "initialVAS": 0,
      "isLandmarksUploaded": false,
      "laterPainScore": "pending",
      "weight": 111
    },
    {
      "session_id": "session_002",
      "accuracy": 17,
      "assessmentResultId": "-OTafA4SqUgE6Y5xrqiI",
      "assessment_id": "as_card_01",
      "bodyCompositionData": {
        "AGR": "0.90",
        "BFC": "-0.90",
        "BMI": "9.51",
        "BMR": "995.39",
        "FM": "-0.18",
        "FMI": "-0.09",
        "LM": "20.18",
        "LMI": "9.60",
        "M_Age": "15",
        "WHGR": "0.37",
        "WHR": "1.01"
      },
      "exercises": [
        {
          "assignReps": 10,
          "correctReps": 0,
          "id": 235,
          "name": "Jog test",
          "setList": [
            {
              "additionalFields": [
                {
                  "fieldName": "accuracy",
                  "fieldText": "Score",
                  "fieldUnit": "%",
                  "fieldValue": "15.16422",
                  "shouldDisplay": false
                }
              ],
              "correctReps": 0,
              "incorrectReps": 0,
              "isSkipped": false,
              "time": 47,
              "totalReps": 0
            }
          ],
          "side": "left",
          "totalReps": 0,
          "totalSets": 1,
          "variationId": "",
          "variationName": ""
        }
      ],
      "finalPainScore": "pending",
      "gender": "male",
      "height": 145,
      "initialPainScore": 0,
      "initialVAS": 0,
      "isLandmarksUploaded": false,
      "laterPainScore": "pending",
      "weight": 20
    }
  ];
  
  module.exports = assessmentData;
  