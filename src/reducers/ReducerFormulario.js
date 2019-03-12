const INITIAL_STATE = {
    nombre:'',
    apellido:'',
    telefono:''
}

const ReducerFomulario= (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'UPDATE_FORMULARIO':
            return {
                ...state,
                [action.payload.name]:action.payload.value
            }
        // case 'REGISTRAR_DOCTOR':
        //     return
        case 'CLEAN_INPUTS':
            return{
                ...INITIAL_STATE
            }
        default:
            return state
    }
}

export default ReducerFomulario
