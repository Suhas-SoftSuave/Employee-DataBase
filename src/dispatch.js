import { login, logout } from './actions';

export const mapStateToProps = (state) => {
    if (state !== undefined) {
        return {
            username: state.username,
            password: state.password,
            isloggedin: state.isloggedin,
            logindisplay: state.logindisplay,
            departdisplay: state.departdisplay
        }
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        login: (name, password) => dispatch(login(name, password))
    };
};

