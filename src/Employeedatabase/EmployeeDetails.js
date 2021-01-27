import { employee } from './data'
import './EmployeeDetails.css';


function EmployeeDetails(props) {


    let person ;
        if(props.empdat!==undefined){
            person = props.empdat.filter((current) => current.unid === props.dept )
        }
         
 
    

    return (
        <div  className="NewEmpclass">
        <div className="EmpDetails" >
            <h1>Employee Details</h1>
            {person?.map((person)=>(
                 <div className="stff">
                 <label>Name:{person.name}</label><br></br>
                 <label>Phone:{person.phone}</label><br></br>
                 <label>DeptId:{person.deptId}</label><br></br>
                 <label>UnId:{person.unid}</label><br></br>
             </div>
               

            ))}
             
            
            
        </div>
        </div>
    )
}

export default EmployeeDetails;