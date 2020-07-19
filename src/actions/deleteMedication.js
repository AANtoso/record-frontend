import { deleteAMedication } from "../reducers/diagnosisReducer"

export const deleteMedication = (medicationID, diagnosisID) => {
    return (dispatch, getState) => {
        // debugger
        fetch(`http://localhost:3001/api/v1/diagnoses/${diagnosisID}/medications/${medicationID}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            dispatch(deleteAMedication(data.medication.id, getState().medications))
        })
    }
}