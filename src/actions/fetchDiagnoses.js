import { fetchDiagnosesAction, getExistingMedications } from "../reducers/diagnosisReducer"

export const fetchDiagnoses = () => {
    return dispatch => {
        fetch('http://localhost:3001/api/v1/diagnoses', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
        .then(response => response.json())
        .then(diagnoses => {
            const medications = []
            // console.log(diagnoses)
            dispatch(fetchDiagnosesAction(diagnoses))
            diagnoses.forEach(diagnosis => {
                diagnosis.medications.forEach(medication => {
                    // debugger
                    medications.push(medication)
                })
            })
            dispatch(getExistingMedications(medications))
        })
    }
}