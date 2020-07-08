export const deleteMedication = (medicationID, diagnosisID) => {
    // debugger
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/diagnoses/${diagnosisID}/medications/${medicationID}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(diagnosis => dispatch({ type:'DELETE_MEDICATION', payload: diagnosis }))
    }
}