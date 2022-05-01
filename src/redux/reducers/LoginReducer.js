import { TOKEN_MOVIE } from "../../util/setting";

let user = {};
if (localStorage.getItem('LOGIN_USER')) {
    user = JSON.parse(localStorage.getItem('LOGIN_USER'));
}

const stateDefault = {
    userLogin: user,
}

export const LoginReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            const { userLogin } = action
            localStorage.setItem('LOGIN_USER', JSON.stringify(userLogin))
            localStorage.setItem('TOKEN_MOVIE', userLogin.accessToken)
            state.userLogin = userLogin;
            return { ...state }
        default:
            return state
    }
}