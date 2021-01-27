import { staff } from './data'
import './StaffDetails.css';

function StaffDetails(props) {


   let person;
    if(props.stfdat!==undefined){
        person = props.stfdat.filter((current) => current.unid === props.dept )
    }
        
  
     

    return (
        <div className="NewEmpclass">
        <div className="EmpDetails" >
            <h1>Staff Details</h1>
            {person && person.map((person)=>(
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

export default StaffDetails;