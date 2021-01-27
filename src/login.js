import { React, useRef, useState } from "react";
import { connect } from "react-redux";
import { login, logout } from './actions';
import { mapDispatchToProps,mapStateToProps } from "./dispatch";

// const mapStateToProps = (state) => {
//     if (state !== undefined) {
//         return {
//             username: state.username,
//             password: state.password,
//             isloggedin: state.isloggedin,
//             logindisplay: state.logindisplay,
//             departdisplay: state.departdisplay

//         }
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         login: (name, password) => dispatch(login(name, password))
//     };
// };

// const logincredentials = [{ user: "Admin", pass: "Admin" }, { user: "Suhas", pass: "Suhas" }]






function LoginForm(props) {
    const [username, setusername] = useState()
    const [password, setpassword] = useState()
    // const [login, setlogin] = useState(false)

    const passwordOnchange = (password) => {

        setpassword(password)

    }
    const usernameOnchange = (username) => {
        setusername(username)
    }
    let checklogin = () => {
        // logincredentials.map((ele, index) => {
        //     if (username !== undefined && password !== undefined) {
        //         let userr = ele.user
        //         let passs = ele.pass
        //         if (userr === username && passs === password) {
        //             if (username === "Admin" && password === "Admin") {
        //                 props.setm(true)
        //             }
        //             else {
        //                 props.setm(false)
        //             }


        //         }

        //     }
        //     else {
        //         alert('please enter values')
        //     }

        // })
        props.login(username, password)
       


    }


    return (
        <div>
            <label>Username<input onChange={(event) => { usernameOnchange(event.target.value) }} ></input>
                <br />
            Password<input type="Password" onChange={(event) => { passwordOnchange(event.target.value) }}></input>
            </label>
            <button onClick={checklogin} >login</button>

        </div>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
// export default LoginForm