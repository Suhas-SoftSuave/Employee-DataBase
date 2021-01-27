export function login(name,password){
    return {
        type: "LOGIN",
        username:name,
        pass:password
    }

}

export function logout(){
    return {
        type: "LOGOUT"
    }
}
