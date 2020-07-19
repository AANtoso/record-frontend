import { addMedicationAction } from "../reducers/diagnosisReducer" 
//Created a redux thunk creator that takes 2 arguments (medication object and diagnosis ID that the medication belongs to.)
export const addMedication = (medication, diagnosisID) => {
    //This think creator returns a function that accepts an argument of dispatch.
    //With this dispatch argument, we can dispatch multiple actions.
    //By dispatching these actions, we can change the state of the store accordingly. 
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
        .then(medication => {
            //This dispatch action is adding the newly input medication to the state. 
            dispatch(addMedicationAction(medication, diagnosisID))
        })
    }
}
