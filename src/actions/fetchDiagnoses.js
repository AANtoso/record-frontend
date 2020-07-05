export const fetchDiagnoses = () => {
    return dispatch => {
        fetch('http://localhost:3001/api/v1/diagnoses', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
        .then(response => response.json())
        .then(diagnoses => dispatch({type: 'FETCH_DIAGNOSES', payload: diagnoses}))
    }
}