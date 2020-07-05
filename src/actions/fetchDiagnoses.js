export const fetchDiagnoses = () => {
    return dispatch => {
        fetch('http://localhost:3001/api/v1/diagnoses')
        .then(response => response.json())
        .then(diagnoses => dispatch({type: 'FETCH_DIAGNOSES', payload: diagnoses}))
    }
}