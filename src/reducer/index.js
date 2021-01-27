
const initialstate = {
username:'admin',
password:'admin',
isloggedin:false,
logindisplay:true,
departdisplay:false

// notlogged:false
}



const reducer = (state = initialstate , action) => {
 
    
    switch(action.type){
     case 'LOGIN': {
         if(state.username===action.username && state.password===action.pass){

            

             return {...state,isloggedin: true,
                logindisplay:true,
                departdisplay:true,
            }
         }
         else{

            
                 
            return {...state,isloggedin: false}
         }
         

     }   
     case 'LOGOUT': {


     }
     default : return state
    }
}

export default reducer