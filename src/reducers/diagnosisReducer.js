const initialState = {
    diagnoses: [],
    medications: []
}

export default function diagnosisReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DIAGNOSES:
            return {
                ...state,
                diagnoses: action.payload.diagnoses
            }
        case GET_EXISTING_MEDICATIONS:
            return {
                ...state,
                medications: action.payload.medications
            }
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

//ACTION_CREATORS
export const fetchDiagnosesAction = diagnoses => {
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

//implicit returning going on here
export const addMedicationAction = medication => ({
    type: ADD_MEDICATION,
    payload: {
        medication
    }
})