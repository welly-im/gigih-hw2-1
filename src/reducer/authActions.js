const initialState = {
    auth : {
        isLoggedIn: false,
        token: ''
    }
}

export default function tokenReducer (state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                auth: {
                    isLoggedIn: true,
                    token: action.payload
                }
            }
        case 'LOGOUT':
            return {
                ...state,
                auth: {
                    isLoggedIn: false,
                    token: ''
                }
            }
        default:
            return state;
        }
    }
