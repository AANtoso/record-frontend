export const addMedication = (medication, diagnosisID) => {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/diagnoses/${diagnosisID}/medications`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(medication)
        })
        .then(response => response.json())
        .then(diagnosis => dispatch({ type:'ADD_MEDICATION', payload: diagnosis }))
    }
}