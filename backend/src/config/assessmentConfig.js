// src/config/assessmentConfig.js

const assessmentConfig = {
    as_hr_02: { // Health & Fitness Assessment
      sections: [
        "Key Body Vitals",
        "Heart Health",
        "Stress Level",
        "Fitness Levels",
        "Posture",
        "Body Composition"
      ],
      fieldMappings: {
        overallHealthScore: "accuracy",
        heartRate: "vitalsMap.vitals.heart_rate",
        bpSys: "vitalsMap.vitals.bp_sys",
        bpDia: "vitalsMap.vitals.bp_dia",
        bmi: "bodyCompositionData.BMI",
        totalRepsSquat: "exercises.find(e => e.id === 259).setList[0].totalReps"
      },
      classification: {
        bmi: [
          { min: 0, max: 18.5, label: "Underweight" },
          { min: 18.5, max: 24.9, label: "Normal" },
          { min: 25, max: 29.9, label: "Overweight" },
          { min: 30, max: 100, label: "Obese" }
        ]
      }
    },
    as_card_01: { // Cardiac Assessment
      sections: [
        "Key Body Vitals",
        "Cardiovascular Endurance",
        "Body Composition"
      ],
      fieldMappings: {
        overallHealthScore: "accuracy",
        heartRate: "vitalsMap.vitals.heart_rate",
        bpSys: "vitalsMap.vitals.bp_sys",
        bpDia: "vitalsMap.vitals.bp_dia",
        bmi: "bodyCompositionData.BMI",
        jogTime: "exercises.find(e => e.id === 235).setList[0].time"
      },
      classification: {
        bmi: [
          { min: 0, max: 18.5, label: "Underweight" },
          { min: 18.5, max: 24.9, label: "Normal" },
          { min: 25, max: 29.9, label: "Overweight" },
          { min: 30, max: 100, label: "Obese" }
        ]
      }
    }
  };
  
  module.exports = assessmentConfig;
  