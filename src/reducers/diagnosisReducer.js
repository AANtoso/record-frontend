const initialState = {
    diagnoses: [],
    medications: []
}

export default function diagnosisReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DIAGNOSES:
            console.log(action.type, state)
            return {
                ...state,
                diagnoses: action.payload.diagnoses
            }
        case GET_EXISTING_MEDICATIONS:
            return {
                ...state,
                medications: action.payload.medications
            }

        // case GET_A_DIAGNOSES_MEDICATION:
        //     return {
        //         ...state,
        //         medications: action.payload.medications
        //     }

        case ADD_MEDICATION:
            return  {
                ...state,
                medications: [...state.medications, action.payload.medication]
            }
        case DELETE_MEDICATION:
            let remainingDiagnoses = state.diagnoses.map(diagnosis => {
                if (diagnosis.id === action.payload.id) {
                    return action.payload
                } else {
                    return diagnosis
                }
            })
            return {...state, diagnoses: remainingDiagnoses}
        default:
            return state
    }
}

//ACTION TYPES
const FETCH_DIAGNOSES = "FETCH_DIAGNOSES"
const GET_EXISTING_MEDICATIONS = "GET_EXISTING_MEDICATIONS"
const ADD_MEDICATION = 'ADD_MEDICATION'
const DELETE_MEDICATION = 'DELETE_MEDICATION'
// const GET_A_DIAGNOSES_MEDICATION = 'GET_A_DIAGNOSES_MEDICATION'

//ACTION_CREATORS
export const fetchDiagnosesAction = diagnoses => {
    // console.log(diagnoses)
    return {
        type: FETCH_DIAGNOSES, 
        payload: {
            diagnoses
        }
    }
}   

export const getExistingMedications = medications => {
    return {
        type: GET_EXISTING_MEDICATIONS,
        payload: {
            medications
        }
    }
}

// export const getADiagnosesMedications = (medications, diagnosis_id) => {
//     return {
//         type: GET_A_DIAGNOSES_MEDICATION,
//         payload: {
//             medications: medications.filter(medication => medication.diagnosis_id === diagnosis_id)
//         }
//     }
// }

//implicit returning going on here
export const addMedicationAction = medication => ({
    type: ADD_MEDICATION,
    payload: {
        medication
    }
})