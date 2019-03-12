const INITIAL_STATE = []

const ReducerDoctors = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'REGISTRAR_DOCTOR':
            return [...state,{
                ...action.payload
            }]
        case 'CARGAR_DOCTORES':
            return [
                ...state,
                ...action.payload
            ]
        case 'DELETE_DOCTOR':
            return state.filter(doctor=>doctor.id != action.payload.id)
        default:
            return state
    }
}

export default ReducerDoctors
