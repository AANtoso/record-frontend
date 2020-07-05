export default function diagnosisReducer(state = {diagnoses: [], medications: []}, action) {
    switch (action.type) {
        case 'FETCH_DIAGNOSES':
            return {diagnoses: action.payload}
        case 'ADD_MEDICATION':
            let diagnoses = state.diagnoses.map(diagnosis => {
                if (diagnosis.id === action.payload.id) {
                    return action.payload
                } else {
                    return diagnosis
                }
            })
            return {...state, diagnoses: diagnoses}
        case 'DELETE_MEDICATION':
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