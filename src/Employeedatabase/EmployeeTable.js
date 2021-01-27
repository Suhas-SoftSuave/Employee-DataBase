import { useState } from "react";
import { staff, employee } from './data'
import EmployeeDetails from "./EmployeeDetails";
import StaffDetails from "./StaffDetails";
import './EmployeeTable.css';
import Modals from "./Modals";

// import Modal from 'react-modal';

function EmployeeTable(props) {

    const [personbutton, setPersonButton] = useState(false)
    const [staffbutton, setStaffButton] = useState(false)
    const [empid, setempid] = useState()
    const [staffid, setStaffid] = useState()
    // const [modalIsOpen, setIsOpen] = useState(false);//react modal
    const [empdata, setempdata] = useState(employee) // employee data
    const [newempname, setnewempname] = useState()
    const [newempphn, setnewempphn] = useState()
    const [staffdata, setstaffdata] = useState(staff) //staff data
    const [newstaffname, setnewstaffname] = useState()
    const [newstaffphn, setnewstaffphn] = useState()

   

    //My logic
    const [dummy, setdummy] = useState(false)//this is for modal open or close
    const [hdr, sethdr] = useState() // this is for modal header

    function setemphdr(name) {
        if (name !== undefined) {
            sethdr(name)
        }


    }



    // const customStyles = {
    //     content: {
    //         top: '50%',
    //         left: '50%',
    //         right: 'auto',
    //         bottom: 'auto',
    //         marginRight: '-50%',
    //         transform: 'translate(-50%, -50%)'
    //     }
    // };


    // //react modal for emp
    // function openModal() {

    //     setIsOpen(true);
    // }

    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.

    // }

    // function closeModal() {
    //     setIsOpen(false);
    // }

    // //end of react modal of emp





    function changeStaffButton() {
        if (!staffbutton) {
            setStaffButton(true)
        }
        setPersonButton(false)
    }

    function changePersonbutton() {

        if (!personbutton) {
            console.log('false')
            setPersonButton(true)
        }
        setStaffButton(false)

    }

    function setEmp(unid) {
        setempid(unid);
        changePersonbutton();

    }



    function setStaff(unid) {
        setStaffid(unid);
        changeStaffButton();
    }

    //Setting of emp

    function addNewName(name) {
        setnewempname(name)
    }
    function addNewPhone(phone) {
        setnewempphn(phone)
    }

    function addNewEmp() {
        console.log('addNewEmp')
        const deptidd = props.empdepid
        const unidd = empdata.length + 3;
        if (newempname === undefined || newempphn === undefined) {
            alert('Name and phone  cannot be empty ')
        } else {
            setempdata([...empdata, { name: newempname, phone: newempphn, deptId: deptidd, unid: unidd }])
            setnewempname()
            setnewempphn()
        }


    }

    //End of Setting of emp

    //Start of Setting of Staff
    function addNewStaffName(name) {
        setnewstaffname(name)
    }
    function addNewStaffPhone(phone) {
        setnewstaffphn(phone)
    }

    function addNewStaff() {
        console.log('addNewStaff')
        const deptidd = props.empdepid
        const unidd = staffdata.length + 3;
        if( newstaffname === undefined || newstaffphn === undefined){
            alert('Name and phone cannot be empty')
        }
        else{
            setstaffdata([...staffdata, { name: newstaffname, phone: newstaffphn, deptId: deptidd, unid: unidd }])
            setnewstaffname()
            setnewstaffphn()
        }
        
    }
    //End of setting of staff


    function openBox() {
        setdummy(true)

    }

    function closeBox() {
        setdummy(false)
    }

    const emp = empdata.filter((current) => current.deptId === props.empdepid)

    const st = staffdata.filter((current) => current.deptId === props.empdepid)


    return (
        <div className="EmployeeTables">
            <div className="Table">
                <div className="EmpTable" >
                    <h1>Employee table</h1>
                    {props.admin && <button type='button' name="Employee" onClick={(event) => {setemphdr(event.target.name);openBox()}}>AddEmployeeInput</button>}
                    <div className="TableScroll"  >


                        <table >
                            <thead>
                                <tr >
                                    <th>DeptId</th>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Unid</th>
                                </tr>
                            </thead>
                            {emp.map((employee) => (

                                <tr >
                                    <td onClick={() => { setEmp(employee.unid) }}>{employee.deptId}</td>
                                    <td onClick={() => { setEmp(employee.unid) }}>{employee.name}</td>
                                    <td onClick={() => { setEmp(employee.unid) }}>{employee.phone}</td>
                                    <td onClick={() => { setEmp(employee.unid) }}>{employee.unid}</td>
                                </tr>


                            ))}
                        </table>
                    </div>
                    <h1>Staff Table</h1>
                    {props.admin &&<button type='button' name="Staff" onClick={(event) => { setemphdr(event.target.name); openBox() }}>AddStaffInput</button>}
                    <div>

                    </div>
                    <div className="TableScroll"   >


                        <table>
                            <tr>
                                <th>DeptId</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>UnId</th>
                            </tr>
                            {st.map((staff) => (
                                <tr>
                                    <td onClick={() => { setStaff(staff.unid) }}>{staff.deptId}</td>
                                    <td onClick={() => { setStaff(staff.unid) }}>{staff.name}</td>
                                    <td onClick={() => { setStaff(staff.unid) }}>{staff.phone}</td>
                                    <td onClick={() => { setStaff(staff.unid) }}>{staff.unid}</td>

                                </tr>
                            ))}
                        </table>

                    </div>
                </div>
            </div>
            <div>
                <Modals setM={dummy} clsM={closeBox} seth={hdr} paef={addNewEmp} paen={addNewName} paep={addNewPhone} pasf={addNewStaff} pasn={addNewStaffName} pasp={addNewStaffPhone}></Modals>


            </div>

            <div className="borderclass">
                {personbutton && <div > {personbutton && <EmployeeDetails empdat={empdata} dept={empid}></EmployeeDetails>} </div>}
                {staffbutton && <div  > {staffbutton && <StaffDetails stfdat={staffdata} dept={staffid} ></StaffDetails>} </div>}
            </div>

        </div>
    )
}

export default EmployeeTable;