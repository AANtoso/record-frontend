const initialState = {
    diagnoses: [],
    medications: [],
    particularDiagMeds: []
}

export default function diagnosisReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_DIAGNOSES_FETCHED:
            return {
                ...state,
                loading: false,
                diagnoses: action.payload.diagnoses
            }
        case ADD_MEDICATION:
            return  {
                ...state,
                medications: [...state.medications, action.payload.medication],
            }
        case GET_ALL_MEDS: 
            return {
                ...state,
                medications: action.payload.medications
            }
        case DELETE_MEDICATION:
            return {
                ...state, 
                medications: action.payload.medications
            }
        default:
            return state
    }
}
//ACTION_TYPES
const ADD_DIAGNOSES_FETCHED = "ADD_DIAGNOSES_FETCHED"
const ADD_MEDICATION = 'ADD_MEDICATION'
const DELETE_MEDICATION = 'DELETE_MEDICATION'
const GET_ALL_MEDS = "GET_ALL_MEDS"

//ACTION_CREATORS

export const addFetchedDiagnoses = diagnoses => {
    return {
        type: ADD_DIAGNOSES_FETCHED,
        payload: {
            diagnoses
        }
    }
}

//implicit returning going on here
export const addMedicationAction = medication => {
    return {
        type: ADD_MEDICATION,
        payload: {
            medication
        }
    }
}

export const getAllMeds = medications => {
    return {
        type: GET_ALL_MEDS,
        payload: {
            medications
        }
    }
}

export const deleteAMedication = (medID, medications) => {
    return {
        type: DELETE_MEDICATION,
        payload: {
            medications: medications.filter(medication => medication.id !== parseInt(medID))
        }
    }
}
