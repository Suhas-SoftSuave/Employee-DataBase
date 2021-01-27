import { useState  } from "react";
import './App.css';
import LoginForm from './login'
import DepartmentList from "./Employeedatabase/DepartmentList";
import {mapStateToProps, mapDispatchToProps} from './dispatch'
import { connect } from "react-redux";


function App({logindisplay, departdisplay}) {
  // const [department, setdepartment] = useState(false)
  // const [loginform, setloginform] = useState(true)
  const [admin,setadmin]=useState(false)


  // function setlogin(x){
  //   setadmin(x)
  //   setdepartment(x)
  //   if(x===true){
  //     setloginform(false)
  //   }
  //   else{
  //     setloginform(true)
  //   }
    
  // }
  // function unsetlogin(){
  //   setloginform(true)
  //   setdepartment(false)
  // }
  return (
    <div className="App">
      {logindisplay && <LoginForm ></LoginForm>}
      {departdisplay && <DepartmentList admin={admin} ></DepartmentList>}
    </div>
  );
}






export default connect(mapStateToProps,mapDispatchToProps)(App);
