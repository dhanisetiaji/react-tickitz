const initialState = {
    loading: false,
    GetAuth: [],
    GetRegister: [],
    isLogin: false,
}


const Fetch = (state = initialState, action) => {
    switch (action.type) {
        case "GET_AUTH_REQUEST":
            return { ...state, loading: true }
        case "GET_AUTH":
            return { ...state, loading: false, isLogin: true, GetAuth: action.payload }
        case "GET_AUTH_REG":
            return { ...state, loading: false, GetRegister: action.payload }
        case 'AUTH_LOGOUT':
            return {
                ...state, loading: false, isLogin: false, GetAuth: { data: { token: null } }
            }
        default:
            return state
    }
}

export default Fetch
