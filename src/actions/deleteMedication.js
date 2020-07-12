// import { deleteAMedication } from "../reducers/diagnosisReducer"

export const deleteMedication = (medicationID, diagnosisID) => {
    return () => {
        // dispatch(deleteAMedication(medicationID, getState().medications))

        fetch(`http://localhost:3001/api/v1/diagnoses/${diagnosisID}/medications/${medicationID}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        // .then(
            // dispatch({ type:'DELETE_MEDICATION', payload: diagnosis })
        // )
    }
}