import { types } from '../constants'

const initialState = {
    loading: false,
    createEmpSuccess: "",
    createEmpError: "",
}

const createEmployeeReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.CREATE_EMPLOYEE:
            return {
                loading: true,
                createEmpSuccess: "",
                createEmpError: ""
            }
        case types.CREATE_EMPLOYEE_SUCCESS:
            return {
                loading: false,
                createEmpSuccess: action.payload,
                createEmpError: ""
            }
        case types.CREATE_EMPLOYEE_ERROR:
            return {
                loading: false,
                createEmpSuccess: "",
                createEmpError: action.payload
            }
        default:
            return state
    }

}

export default createEmployeeReducer